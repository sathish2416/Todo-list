import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import styled from "styled-components";

const App = () => (
  <Router>
    <AppContainer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AppContainer>
  </Router>
);

const AppContainer = styled.div`
  nav {
    margin-left: 50px;
    margin-top: 50px;
    a {
      text-decoration: none;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 4px 4px 1px #e1e1e1;
      margin-right: 10px;
      background-color: #fafafa;
    }
    a:active {
      background-color: #e1e1e1;
    }
  }
`;

export default App;
