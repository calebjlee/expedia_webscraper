import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./screens/Home";
import SearchResult from "./screens/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result/:location/:date1/:date2/:adults/:rooms" element={<SearchResult/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
