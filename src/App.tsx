import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingPage, MainPage, ResultPage, TestPage } from "../src/pages";
import "../src/assets/styles/main.css";

function App() {
  return (
    <div className="main_wrapper">
      <BrowserRouter>
        {/* <ScrollTop /> */}
        <div className="main_layout">
          <Routes>
            <Route path="/test/main" element={<MainPage />} />
            {/* <Route path="/test/testing" element={<TestPage />} /> */}
            <Route path="/test/loading" element={<LoadingPage />} />
            <Route path="test/result" element={<ResultPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
