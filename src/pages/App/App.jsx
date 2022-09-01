import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage";

function App() {

  const [searchResults, setSearchResults] = useState([]);

  function attemptSearch(query) {
    const axios = require('axios').default;

    axios.get('/api/search', {
      params: {
        query: query
      }
    })
      .then(response => {
        setSearchResults(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <Routes>
      <Route
          path="/" 
          element={<HomePage attemptSearch={attemptSearch} searchResults={searchResults} />} 
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
