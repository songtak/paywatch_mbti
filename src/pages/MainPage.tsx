import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { rabbitYearTestList } from "../model/Rabbit";
import { mbtiElementList } from "../model/Common";
import MainContainer from "../container/MainContainer";

interface User {
  mbti: string;
  over_days: number;
  salary: number;
  sex: string;
}

const MainPage = () => {
  const navigate = useNavigate();
  const [questId, setQuestId] = useState<number>(0);

  /**  */
  const [state, setState] = useState<User>({
    mbti: "",
    over_days: 0,
    salary: 0,
    sex: "",
  });

  /** 질문 */
  const [selectedType, setSelectedType] = useState<any>([]);

  const nowQuest = rabbitYearTestList.find((item: any) => item.id === questId);

  /**  */
  const handleClickStart = () => {
    setQuestId(1);
  };

  /** 버튼 클릭 */
  const handleClickAnswerButton = (type: string) => {
    if (typeof nowQuest !== "undefined") {
      setQuestId(nowQuest?.id + 1);
    }
    setSelectedType([...selectedType, type]);
  };

  /** MBTI */
  const setMbti = () => {
    const mbtiList: any = mbtiElementList.map((item: any) => {
      let count = selectedType.reduce(
        (cnt: any, element: any) => cnt + (item === element),
        0
      );
      //   return { type: item, count: count };
      return count;
    });

    let mbtiResult: string[] = [];

    mbtiList[0] > mbtiList[1] ? mbtiResult.push("e") : mbtiResult.push("i");
    mbtiList[2] > mbtiList[3] ? mbtiResult.push("s") : mbtiResult.push("n");
    mbtiList[4] > mbtiList[5] ? mbtiResult.push("f") : mbtiResult.push("t");
    mbtiList[6] > mbtiList[7] ? mbtiResult.push("j") : mbtiResult.push("p");

    return mbtiResult.join("");
  };

  /** 결과 화면으로 이동 */
  const goResultPage = async () => {
    const mbti = await setMbti();
    navigate(`/test/result/${mbti}`);
  };

  useEffect(() => {
    if (questId === 13) {
      setTimeout(() => goResultPage(), 1500);
    }
  }, [questId]);

  return (
    <div className="main_wrapper">
      <div className="main_header"></div>
      {questId === 0 && <MainContainer handleClickStart={handleClickStart} />}
      {typeof nowQuest !== "undefined" && nowQuest?.id < 13 && (
        <div className="main_body_wrapper">
          <div className="status_bar_wrapper">
            <div className="status_bar"></div>
          </div>

          {/* <div>Q.{nowQuest.id}</div> */}
          <div>{nowQuest.quest}</div>
          <div className="main_button_wrapper">
            <button
              className="main_button"
              onClick={() => {
                handleClickAnswerButton(nowQuest.answer[0].type);
              }}
            >
              {nowQuest.answer[0].title}
            </button>
            <button
              className="main_button"
              onClick={() => {
                handleClickAnswerButton(nowQuest.answer[1].type);
              }}
            >
              {nowQuest.answer[1].title}
            </button>
          </div>
        </div>
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
