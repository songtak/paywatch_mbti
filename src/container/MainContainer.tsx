import React, { useState, useEffect } from "react";
import Toast from "./Toast";

interface Props {
  state: any;
  setState: any;
  handleClickStart: () => void;
}

const MainContainer = ({ state, setState, handleClickStart }: any) => {
  const [questId, setQuestId] = useState<number>(0);
  const [isOpenShareToast, setIsOpenShareToast] = useState<boolean>(false);

  const handleClickNext = (id: number) => {
    setQuestId(id);
  };

  const handleClickShare = () => {
    navigator.clipboard?.writeText("http://localhost:3000/test/main");
    setIsOpenShareToast(true);
  };

  /** 새로운 챙으로 페이워치 홈페이지 오픈 */
  const handleOpenPaywatch = () => {
    window.open("https://www.paywatch.co.kr/");
  };

  // https://www.paywatch.co.kr/

  return (
    <>
      <Toast
        title="복사되었습니다!"
        isOpen={isOpenShareToast}
        setIsOpen={setIsOpenShareToast}
      />
      {questId === 0 && (
        <div className="main_body_wrapper">
          <div>
            <span className="main_title">나는 어떤 토끼일까?</span>
          </div>
          <div>
            <img src="/images/bunny_1.png" alt="" className="" height={300} />
          </div>
          <div>
            <div className="main_button_wrapper">
              <button
                className="main_button start"
                onClick={() => {
                  //   handleClickNext(1);
                  handleClickStart();
                }}
              >
                시작 🥕
              </button>
              <button
                className="main_button share"
                onClick={() => {
                  handleClickShare();
                }}
              >
                공유하기
              </button>
              <div>
                <img
                  src="/images/img_1.png"
                  alt=""
                  className=""
                  width={80}
                  onClick={() => {
                    handleOpenPaywatch();
                  }}
                />
                {/* <img src="/images/img_3.png" alt="" className="" width={20} /> */}
              </div>
            </div>
          </div>
        </div>
      )}
      {questId === 1 && (
        <div className="main_body_wrapper">
          <div>
            <span>메인입니다.</span>
          </div>
          <div>
            <div>내 성별은?</div>
            <input type="select"></input>
          </div>
          <div>
            <div className="main_button_wrapper">
              <button
                className="main_button"
                onClick={() => {
                  //   handleClickNext(2);
                  handleClickStart();
                }}
              >
                🐰 🥕 🐰 🥕
              </button>
              <div>
                <img
                  src="/images/img_1.png"
                  alt=""
                  className=""
                  width={80}
                  onClick={() => {
                    handleOpenPaywatch();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        // <div className="main_body_wrapper">
        //   <div>
        //     <span>메인입니다.</span>
        //   </div>
        //   <div>
        //     <div>내 성별은?</div>
        //     <input type="select"></input>
        //   </div>
        //   <div>
        //     <div className="main_button_wrapper">
        //       <button
        //         className="main_button"
        //         onClick={() => {
        //           handleClickNext(2);
        //         }}
        //       >
        //         다음
        //       </button>
        //       <div>페이워치</div>
        //     </div>
        //   </div>
        // </div>
      )}
      {questId === 2 && (
        <div className="main_body_wrapper">
          <div>
            <span>메인입니다.</span>
          </div>
          <div>
            <div>내 월급은?</div>
            <input type="select"></input>
          </div>
          <div>
            <div className="main_button_wrapper">
              <button
                className="main_button"
                onClick={() => {
                  handleClickNext(3);
                }}
              >
                다음
              </button>
              <div>페이워치</div>
            </div>
          </div>
        </div>
      )}
      {questId === 3 && (
        <div className="main_body_wrapper">
          <div>
            <span>메인입니다.</span>
          </div>
          <div>
            <div>호에엥 역시 월급은 스칠뿐...</div>
            <div>
              월급날이
              <input type="select"></input>일 밖에 안지났는데 벌써 다 썼네 ㅜㅜ
            </div>
          </div>
          <div>
            <div className="main_button_wrapper">
              <button
                className="main_button"
                onClick={() => {
                  handleClickStart();
                }}
              >
                다음
              </button>
              <div>페이워치</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainContainer;