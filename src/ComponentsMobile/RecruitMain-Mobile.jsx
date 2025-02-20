import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './RecruitMain-Mobile.css';

import PenAnimationMobile from './PenAnimationMobile';

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

  
  const [isRecruiting, setIsRecruiting] = useState(false);
  const [isBeforeRecruit, setIsBeforeRecruit] = useState(false);

  useEffect(() => {
    const now = new Date();
    const startDate = new Date('2025-02-27T00:00:00');
    const endDate = new Date('2025-03-12T18:00:00');

    setIsRecruiting(now >= startDate && now <= endDate);
    setIsBeforeRecruit(now < startDate);
  }, []);

  const navigate = useNavigate();
  const handleJoin = () => {
    navigate('/Join');
  }

  const handleCantJoin = () => {
    alert("모집 기간이 아닙니다.")
  }

  return (
    <div className="RecuritMain-Main-Mobile">
      <PenAnimationMobile />
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
        <div className="RecuritMain-Main-SubTitle-ApplyBtn-Mobile" onClick={isRecruiting ? handleJoin : handleCantJoin}>
        {isBeforeRecruit ? '02.27 모집 시작' : isRecruiting ? '13기 지원하기' : '13기 모집 마감'}
        </div>
      </div>
    </div>
  );
}

export default RecruitMainMobile;