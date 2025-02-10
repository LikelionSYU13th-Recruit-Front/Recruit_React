import { useState, useEffect } from "react";
import './RecruitMain.css';
import PenAnimation from "./PenAnimation";
import AnimatedPath from './AnimatedPath';
import Header from './Header';

function RecruitMain() {

  const textArray = [
    { char: "L", className: "" },
    { char: "!", className: "RecuritMain-Main-Title-1" },
    { char: "K", className: "" },
    { char: "E", className: "" },
    { char: "L", className: "" },
    { char: "I", className: "" },
    { char: "0", className: "RecuritMain-Main-Title-2" },
    { char: "N", className: "" },
    { char: "\n", className: "" },
    { char: "a", className: "" },
    { char: "+", className: "RecuritMain-Main-Title-3" },
    { char: " ", className: "" },
    { char: "S", className: "" },
    { char: "Y", className: "" },
    { char: "U", className: "" },
    { char: " ", className: "" },
    { char: "1", className: "RecuritMain-Main-Title-4" },
    { char: "3", className: "RecuritMain-Main-Title-5" },
    { char: "t", className: "" },
    { char: "h", className: "" },
  ];

  const [typedText, setTypedText] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < textArray.length) {
        setTypedText(textArray.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150); // 타이핑 속도 조절

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="RecuritMain-Main">
      {/* <Header /> */}
      <AnimatedPath />
      {/* <PenAnimation /> */}
      <div className="RecuritMain-Main-Title">
        {typedText.length > 0 &&
          typedText.map((item, index) =>
            item.char === "\n" ? (
              <br key={index} />
            ) : (
              <span key={index} className={item.className || ""}>
                {item.char}
              </span>
            )
          )}
      </div>
      <div className="RecuritMain-Main-SubTitle">
        <div className="RecuritMain-Main-SubTitle-RecruitIntro">함께 성장할 삼육멋사 13기 아기사자를 모집합니다</div>
        <div className="RecuritMain-Main-SubTitle-ApplyBtn">13기 지원하기</div>
      </div>
    </div>
  );
}

export default RecruitMain;