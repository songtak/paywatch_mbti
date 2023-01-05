import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, ResultPage, MyFarmPage } from "../src/pages";
import "../src/assets/styles/main.css";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter basename="https://songtak.github.io/paywatch_mbti/">
        {/* <ScrollTop /> */}
        <div className="layout">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/result/:mbti" element={<ResultPage />} />
            <Route path="/farm/:id" element={<MyFarmPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
