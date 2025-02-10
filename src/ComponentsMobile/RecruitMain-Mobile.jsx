import { useState, useEffect } from "react";
import './RecruitMain-Mobile.css';

function RecruitMainMobile() {

  const textArray = [
    { char: "L", className: "" },
    { char: "!", className: "RecuritMain-Main-Title-Mobile-1" },
    { char: "K", className: "" },
    { char: "E", className: "" },
    { char: "L", className: "" },
    { char: "I", className: "" },
    { char: "0", className: "RecuritMain-Main-Title-Mobile-2" },
    { char: "N", className: "" },
    { char: "\n", className: "" },
    { char: "a", className: "" },
    { char: "+", className: "RecuritMain-Main-Title-Mobile-3" },
    { char: " ", className: "" },
    { char: "S", className: "" },
    { char: "Y", className: "" },
    { char: "U", className: "" },
    { char: "\n", className: "" },
    { char: "1", className: "RecuritMain-Main-Title-Mobile-4" },
    { char: "3", className: "RecuritMain-Main-Title-Mobile-5" },
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
    <div className="RecuritMain-Main-Mobile">
      <div className="RecuritMain-Main-Title-Mobile">
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
      <div className="RecuritMain-Main-SubTitle-Mobile">
        <div className="RecuritMain-Main-SubTitle-RecruitIntro-Mobile">함께 성장할<br /> 삼육멋사 13기 아기사자를 모집합니다</div>
        <div className="RecuritMain-Main-SubTitle-ApplyBtn-Mobile">13기 지원하기</div>
      </div>
    </div>
  );
}

export default RecruitMainMobile;