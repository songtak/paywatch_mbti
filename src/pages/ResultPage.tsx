import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { rabbitYearResultList } from "../model/Rabbit";
import Toast from "../container/Toast";

import _ from "lodash";

const ResultPage = () => {
  const navigate = useNavigate();
  const { mbti } = useParams();
  const [isOpenShareToast, setIsOpenShareToast] = useState<boolean>(false);

  const result: any = rabbitYearResultList.find(
    (item) => item.type === mbti?.toUpperCase()
  );

  // console.log("result", result);

  const handleClickShare = () => {
    navigator.clipboard?.writeText(`http://localhost:3000/test/result/${mbti}`);
    setIsOpenShareToast(true);
  };

  /** 테스트 다시하기 */
  const handleClickReTest = () => {
    navigate("/test/main");
  };

  return (
    <>
      <Toast
        title="복사되었습니다!"
        isOpen={isOpenShareToast}
        setIsOpen={setIsOpenShareToast}
      />
      <div className="main_wrapper">
        <div className="main_header"></div>
        <div className="main_body_wrapper">
          <div>
            <div className="result_sub_title">{result?.subTitle}</div>
            <div className="result_title">{result?.title}</div>
          </div>
          <div>
            <div>
              <img
                src={`/images/mbti/${mbti?.toUpperCase()}.png`}
                alt=""
                className=""
                height={250}
              />
            </div>
            <div className="result">{result?.result}</div>
            <div className="result_ad">페이워치 홍보 글</div>
          </div>
          <div className="main_button_wrapper">
            {/* <button className="main_button" onClick={handleClickShare}>
              토끼마을 구경가기!
            </button> */}
            <button className="main_button start" onClick={handleClickShare}>
              공유하기
            </button>
            <button className="main_button share" onClick={handleClickReTest}>
              다시하기
            </button>
            <div style={{ marginBottom: "12px", marginTop: "12px" }}>
              <img
                src="/images/img_1.png"
                alt=""
                className=""
                width={80}
                onClick={() => {
                  window.open("https://www.paywatch.co.kr/");
                }}
              />
              {/* <img src="/images/img_3.png" alt="" className="" width={20} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
