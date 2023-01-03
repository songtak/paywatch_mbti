import React from "react";
import { useParams } from "react-router";

const ResultPage = () => {
  const { mbti } = useParams();

  return (
    <div className="main_wrapper">
      <div className="main_header"></div>
      <div className="main_body_wrapper">
        <div>결과</div>
        <div>내용</div>
        <div className="main_button_wrapper">
          <button className="main_button">공유하기</button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
