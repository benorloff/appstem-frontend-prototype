import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";

function App() {
  const [user, setUser] = useState(userService.getUser()); 

  const [searchResults, setSearchResults] = useState([]);

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); 
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  function attemptSearch(query) {
    console.log('hit attemptSearch in App');
    const axios = require('axios').default;

    axios.get('/api/search', {
      params: {
        query: query
      }
    })
      .then(function (response) {
        console.log(response, '<--unsplash api response')
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  if (user) {
    return (
      <Routes>
        <Route
          path="/" 
          element={<HomePage attemptSearch={attemptSearch} searchResults={searchResults} handleSignUpOrLogin={handleSignUpOrLogin} />} 
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
          path="/" 
          element={<HomePage attemptSearch={attemptSearch} searchResults={searchResults} handleSignUpOrLogin={handleSignUpOrLogin} />} 
      />
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
