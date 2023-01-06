import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { rabbitYearTestListMj } from "../model/Rabbit";
import { mbtiElementList } from "../model/Common";
import MainContainer from "../container/MainContainer";
import loading from "../assets/images/loading.gif";

interface User {
  id?: number;
  mbti: string;
  name: string;
}

const MainPage = () => {
  const navigate = useNavigate();
  const [questId, setQuestId] = useState<number>(0);

  /**  */
  const [user, setUser] = useState<User>({
    mbti: "",
    name: "",
  });

  /** 질문 */
  const [selectedType, setSelectedType] = useState<any>([]);

  const nowQuest = rabbitYearTestListMj.find(
    (item: any) => item.id === questId
  );

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
    navigate(`/result/${mbti}`);
  };

  useEffect(() => {
    if (questId === 13) {
      setTimeout(() => goResultPage(), 1500);
    }
  }, [questId]);

  return (
    <div className="main_wrapper">
      <div className="main_header">
        <div style={{ fontSize: "1.75rem" }}>
          {questId !== 0 && "나는 어느 토끼일까?"}
        </div>
      </div>
      {questId === 0 && (
        <MainContainer
          handleClickStart={handleClickStart}
          user={user}
          setUser={setUser}
        />
      )}
      {typeof nowQuest !== "undefined" && nowQuest?.id < 13 && (
        <div className="main_body_wrapper">
          <div className="status_bar_wrapper">
            <div className={`status_bar n${nowQuest?.id}`}>
              {/* <div className="status_bar"> */}
              <ul>
                {/* <img src={`/images/carrot.png`} alt="" height={40} /> */}
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
              </ul>
            </div>
          </div>
          <div className="test_quest_wrapper">
            <div className="test_quest q">Q.{nowQuest.id}</div>
            <div className="test_quest">{nowQuest.quest}</div>
          </div>
          <div className="main_button_wrapper">
            <button
              className="test_button"
              onClick={() => {
                handleClickAnswerButton(nowQuest.answer[0].type);
              }}
            >
              {nowQuest.answer[0].title}
            </button>
            <button
              className="test_button"
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
        <div className="loading_wrapper">
          <div>
            {/* <div>🐰 🥕 🐰 🥕</div> */}
            <img src={loading} alt="" className="loading" height={250} />

            {/* <div>깡 충 깡 충</div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
