import React, { useState, useEffect } from "react";

const MainContainer = ({ handleClickStart }: any) => {
  const [questId, setQuestId] = useState<number>(0);

  const handleClickNext = (id: number) => {
    setQuestId(id);
  };

  return (
    <>
      {questId === 0 && (
        <div className="main_body_wrapper">
          <div>
            <span>메인입니다.</span>
          </div>
          <div>이미지</div>
          <div>
            <div className="main_button_wrapper">
              <button
                className="main_button"
                onClick={() => {
                  handleClickNext(1);
                }}
              >
                시작
              </button>
              <button className="main_button">공유하기</button>
              <div>페이워치</div>
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
                  handleClickNext(2);
                }}
              >
                다음
              </button>
              <div>페이워치</div>
            </div>
          </div>
        </div>
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
