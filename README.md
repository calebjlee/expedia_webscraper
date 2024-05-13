
# Expedia Webscraper 🌐

This project is a sample based on the Expedia website, focused on webscraping to gather data on hotels.

## Technologies Used

### FrontEnd
- ReactJS <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="20" height="20">
- CSS <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" width="20" height="20">
- HTML <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width="20" height="20">

### BackEnd
- Python <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" width="20" height="20">
  - Flask <img src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/86d2051077c7783048e03a571c753e22" width="20" height="20">
  - Playwright <img src="https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png" width="20" height="20">

## Setup

### Requirements

- NodeJS <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="20" height="20"> - You can download it [here](https://nodejs.org/)
- IDE - Recommended: VS Code <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" width="20" height="20"> - You can download it [here](https://code.visualstudio.com/)
- Python <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" width="20" height="20"> - You can download it [here](https://www.python.org/)

### Installation

1. Clone the GitHub repository
   ```bash
   git clone https://github.com/calebjlee/expedia_webscraper.git
   ```

2. Navigate to the project directory
   ```bash
   cd expedia_webscraper/expedia_webscraper
   ```

3. Install the required packages
   ```bash
   npm install
   ```

4. Run the website
   ```bash
   npm run start
   ```

5. Install flask, flask-cors, and playwright
   ```bash
   pip install flask
   pip install flask-cors
   pip install playwright
   ```

6. Open a new terminal and run the Flask app
   ```bash
   cd expedia_webscraper/expedia_webscraper/src/app && python app.py
   ```
   or
   ```bash
   cd expedia_webscraper/expedia_webscraper/src/app && python3 app.py
   ```

7. Open up the website at `localhost:3000`. Please be patient, as it may take 15-20 seconds to webscrape from Expedia.

## Challenges Faced

During this project, my first attempt at webscraping, I encountered difficulties with Expedia's LazyLoad feature, which saves memory. I managed to bypass this by using Playwright's `click()` and `scroll_into_view_if_needed()` functions. Additionally, using the `args=['--enable-automation']` flag helped register the "load more" button clicks effectively.

This was a fun project, and I look forward to further exploring the possibilities of webscraping in the future!
