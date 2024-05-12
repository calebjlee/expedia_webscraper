import time
from flask import Flask, request, jsonify
from flask_cors import CORS

from playwright.sync_api import sync_playwright

def scrape_expedia(link='https://www.expedia.com/Hotel-Search?destination=los%20angeles&flexibility=0_DAY&d1=2024-05-14&startDate=2024-05-14&d2=2024-05-18&endDate=2024-05-18&adults=1&rooms=1'):
    with sync_playwright() as p:
        browser = p.firefox.launch(headless=True, args=['--enable-automation'])
        page = browser.new_page()
        page.goto(link)
        page.click('body')

        show_more_button = page.locator("button", has_text="Show more")
        if show_more_button.is_visible():
            show_more_button.click()
            time.sleep(1)
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.click('body')

        cards = page.locator('[data-stid="lodging-card-responsive"]')
        hotels = []
        print(cards.count())
        num_cards = min(cards.count(), 20)
        for i in range(num_cards):
            card = cards.nth(i)

            content = card.locator('div.uitk-card-content-section')
            content.scroll_into_view_if_needed()
            title = content.locator('h3').text_content()

            image_locator = card.locator('img.uitk-image-media')
            image_src = "Image not available"

            if image_locator.count() > 0:
                for j in range(image_locator.count()):
                    if image_locator.nth(j).get_attribute('fetchpriority') == "high":
                        image_src = image_locator.nth(j).get_attribute('src')
                        break
                else:
                    image_src = image_locator.first.get_attribute('src')
            location_locator = content.locator('div.uitk-text.uitk-text-spacing-half.truncate-lines-2.uitk-type-300.uitk-text-default-theme')
            if location_locator.count() > 1:
                location = location_locator.nth(1).text_content()
            else:
                location = location_locator.text_content()
            rating = float(content.locator('span.uitk-badge-base-text').text_content()) if content.locator('span.uitk-badge-base-text').is_visible() else "N/A"
            verbal_rating = content.locator('span.uitk-text.uitk-type-300.uitk-type-medium.uitk-text-emphasis-theme').text_content() if content.locator('span.uitk-text.uitk-type-300.uitk-type-medium.uitk-text-emphasis-theme').is_visible() else "N/A"
            num_reviews = content.locator('span.uitk-text.uitk-type-200.uitk-type-regular.uitk-text-default-theme').text_content() if content.locator('span.uitk-text.uitk-type-200.uitk-type-regular.uitk-text-default-theme').is_visible() else "N/A"
            price = content.locator('div.uitk-type-500').text_content() if content.locator('div.uitk-type-500').is_visible() else "N/A"

            hotels.append({
                'title': title,
                'location': location,
                'image_src': image_src,
                'rating': rating,
                'verbal_rating': verbal_rating,
                'num_reviews': num_reviews,
                'price': price
            })
        
        return hotels

app = Flask(__name__)
CORS(app)

@app.route('/getdata')
def getdata():
    location = request.args.get('location', default=None, type=str)
    date1 = request.args.get('d1', default=None, type=str)
    date2 = request.args.get('d2', default=None, type=str)
    adults = request.args.get('adults', default=1, type=int)
    rooms = request.args.get('rooms', default=1, type=int)
    url = f'https://www.expedia.com/Hotel-Search?destination={location}&flexibility=0_DAY&d1={date1}&startDate={date1}&d2={date2}&endDate={date2}&adults={adults}&rooms={rooms}'
    data = scrape_expedia(url)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)