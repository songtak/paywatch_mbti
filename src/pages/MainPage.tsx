import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { rabbitYearTestList } from "../model/Rabbit";

const MainPage = () => {
  const navigate = useNavigate();
  const [questId, setQuestId] = useState<number>(0);

  const nowQuest = rabbitYearTestList.find((item: any) => item.id === questId);

  const handleClickStart = () => {
    setQuestId(1);
  };

  /** 버튼 클릭 */
  const handleClickAnswerButton = (type: string) => {
    if (typeof nowQuest !== "undefined") {
      setQuestId(nowQuest?.id + 1);
    }
  };

  /** 결과 화면으로 이동 */
  const goResultPage = () => {
    navigate("/test/result");
  };

  useEffect(() => {
    if (questId === 13) {
      setTimeout(() => goResultPage(), 1500);
    }
  }, [questId]);

  return (
    <div className="main">
      {questId === 0 && (
        <>
          <div>메인입니다.</div>
          <div>이미지</div>
          <button onClick={handleClickStart}>시작</button>
        </>
      )}
      {typeof nowQuest !== "undefined" && nowQuest?.id < 13 && (
        <>
          <div>Q.{nowQuest.id}</div>
          <div>{nowQuest.quest}</div>
          <button
            onClick={() => {
              handleClickAnswerButton(nowQuest.answer[0].type);
            }}
          >
            {nowQuest.answer[0].title}
          </button>
          <button
            onClick={() => {
              handleClickAnswerButton(nowQuest.answer[0].type);
            }}
          >
            {nowQuest.answer[1].title}
          </button>
        </>
      )}
      {questId === 13 && (
        <>
          <div>로딩!</div>
        </>
      )}
    </div>
  );
};

export default MainPage;
