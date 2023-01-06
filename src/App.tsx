import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { MainPage, ResultPage, MyFarmPage } from "../src/pages";
import ReactGA from "react-ga";
import _ from "lodash";

import "../src/assets/styles/main.css";
const TRACKING_ID: string | undefined = process.env.REACT_APP_GA_KEY;
!_.isUndefined(TRACKING_ID) && ReactGA.initialize(TRACKING_ID, { debug: true });
ReactGA.pageview(window.location.pathname);

function App() {
  console.log("process.env.REACT_APP_GA_KEY", process.env.REACT_APP_GA_KEY);

  return (
    <div className="wrapper">
      {/* <BrowserRouter> */}
      {/* <BrowserRouter basename="https://songtak.github.io/paywatch_mbti/"> */}
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        {/* <HashRouter> */}
        {/* <ScrollTop /> */}
        <div className="layout">
          <Routes>
            <Route path="/result/:mbti" element={<ResultPage />} />
            <Route path="/farm/:id" element={<MyFarmPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
