import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { rabbitYearResultList } from "../model/Rabbit";
import Toast from "../container/Toast";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import ReactGA from "react-ga";

import ISTJ from "../assets/images/mbti/ISTJ.png";
import ISTP from "../assets/images/mbti/ISTP.png";
import ISFJ from "../assets/images/mbti/ISFJ.png";
import ISFP from "../assets/images/mbti/ISFP.png";
import INTJ from "../assets/images/mbti/INTJ.png";
import INTP from "../assets/images/mbti/INTP.png";
import INFJ from "../assets/images/mbti/INFJ.png";
import INFP from "../assets/images/mbti/INFP.png";

import ESTJ from "../assets/images/mbti/ESTJ.png";
import ESTP from "../assets/images/mbti/ESTP.png";
import ESFJ from "../assets/images/mbti/ESFJ.png";
import ESFP from "../assets/images/mbti/ESFP.png";
import ENTJ from "../assets/images/mbti/ENTJ.png";
import ENTP from "../assets/images/mbti/ENTP.png";
import ENFJ from "../assets/images/mbti/ENFJ.png";
import ENFP from "../assets/images/mbti/ENFP.png";
import AD from "../assets/images/ad.png";
import img_1 from "../assets/images/img_1.png";

import _ from "lodash";

const ResultPage = () => {
  const navigate = useNavigate();
  const { mbti } = useParams();
  const resultImageRef = useRef<HTMLDivElement>(null);

  const [isOpenShareToast, setIsOpenShareToast] = useState<boolean>(false);

  const result: any = rabbitYearResultList.find(
    (item) => item.type === mbti?.toUpperCase()
  );

  // console.log("result", result);

  // const handleClickDownload = () => {
  //   //
  // };

  /** 저장하기 */
  const handleClickDownload = useCallback(() => {
    if (resultImageRef.current === null) {
      // loadingStore.endLoading();
      return;
    }
    domtoimage.toBlob(resultImageRef.current).then((blob: any) => {
      saveAs(blob, "2023_rabbit_paywatch.jpeg");
    });
    // domtoimage.toJpeg(resultImageRef.current).then((dataUrl: string) => {
    //   // setRegisterCms(dataUrl);
    //   var link = document.createElement("a");
    //   link.download = "2023_rabbit_paywatch.jpeg";
    //   link.href = dataUrl;
    //   link.click();
    // });
  }, [resultImageRef]);

  const handleClickShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "나는 어떤 토끼일까? for paywatch",
          text: "2023 계묘년 토끼로 알아보는 성격유형별 월급관리 방법, 나는 어떤 토끼일까?",
          url: `https://songtak.github.io/paywatch_mbti/#/result/${mbti}`,
        })
        .then(() => console.log("공유 성공"))
        .catch((error) => console.log("공유 실패", error));
    } else {
      // navigator.clipboard?.writeText("https://songtak.github.io/paywatch_mbti");

      navigator.clipboard?.writeText(
        `https://songtak.github.io/paywatch_mbti/#/result/${mbti}`
      );
      setIsOpenShareToast(true);
    }
  };

  /** 테스트 다시하기 */
  const handleClickReTest = () => {
    navigate("/");
  };

  useEffect(() => {
    ReactGA.event({
      category: "mbti_result_view",
      action: "mbti_result_view",
      label: "mbti_result_view",
    });
  }, []);

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
          <div
            ref={resultImageRef}
            style={{
              backgroundColor: "rgb(246, 248, 188)",
              paddingTop: "24px",
            }}
          >
            <div>
              <div className="result_sub_title">{result?.subTitle}</div>
              <div className="result_title">{result?.title}</div>
            </div>
            <div>
              <div>
                {/* <img
                src={ISTJ}
                // src={mbti?.toUpperCase()}
                // src={`/images/mbti/${mbti}.png`}
                // src={`/images/mbti/${mbti?.toUpperCase()}.png`}
                alt=""
                className=""
                height={250}
              /> */}
                {mbti?.toUpperCase() === "ISTJ" && (
                  <img src={ISTJ} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ISTP" && (
                  <img src={ISTP} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ISFJ" && (
                  <img src={ISFJ} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ISFP" && (
                  <img src={ISFP} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "INTJ" && (
                  <img src={INTJ} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "INTP" && (
                  <img src={INTP} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "INFJ" && (
                  <img src={INFJ} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "INFP" && (
                  <img src={INFP} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ESTJ" && (
                  <img src={ESTJ} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ESTP" && (
                  <img src={ESTP} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ESFJ" && (
                  <img src={ESFJ} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ESFP" && (
                  <img src={ESFP} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ENTJ" && (
                  <img src={ENTJ} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ENTP" && (
                  <img src={ENTP} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ENFJ" && (
                  <img src={ENFJ} alt="" className="" height={250} />
                )}
                {mbti?.toUpperCase() === "ENFP" && (
                  <img src={ENFP} alt="" className="" height={250} />
                )}
              </div>
              <div className="result result-font">{result?.result}</div>
              <div className="result_ad">
                <img
                  src={AD}
                  alt=""
                  className="ad_img"
                  onClick={() => {
                    window.open("https://www.paywatch.co.kr/");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="main_button_wrapper">
            {/* <button className="main_button" onClick={handleClickShare}>
              토끼마을 구경가기!
            </button> */}
            {/* <button
              className="main_button start"
              onClick={() => {
                handleClickDownload();
              }}
            >
              저장하기
            </button> */}
            <button
              className="main_button start"
              onClick={() => {
                handleClickShare();
                ReactGA.event({
                  category: "click_mbti_share",
                  action: "click_mbti_share",
                  label: "click_mbti_share",
                });
              }}
            >
              공유하기
            </button>
            <button className="main_button share" onClick={handleClickReTest}>
              다시하기
            </button>
            <div style={{ marginBottom: "12px", marginTop: "12px" }}>
              <img
                src={img_1}
                // src="/images/img_1.png"
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
