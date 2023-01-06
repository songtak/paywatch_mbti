import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { MainPage, ResultPage, MyFarmPage } from "../src/pages";
import "../src/assets/styles/main.css";

function App() {
  return (
    <div className="wrapper">
      {/* <BrowserRouter> */}
      {/* <BrowserRouter basename="https://songtak.github.io/paywatch_mbti/"> */}
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <HashRouter>
        {/* <ScrollTop /> */}
        <div className="layout">
          <Routes>
            <Route path="/result/:mbti" element={<ResultPage />} />
            <Route path="/farm/:id" element={<MyFarmPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
