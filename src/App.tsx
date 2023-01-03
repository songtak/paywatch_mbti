import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, ResultPage } from "../src/pages";
import "../src/assets/styles/main.css";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        {/* <ScrollTop /> */}
        <div className="layout">
          <Routes>
            <Route path="/test/main" element={<MainPage />} />
            <Route path="test/result/:mbti" element={<ResultPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
