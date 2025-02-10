import mouseIcon from "../images/mouseIcon.png"
import dropdownIcon from "../images/DropDown.png"
import dropupIcon from "../images/DropUp.png"
import { useState } from "react";
import { Element } from 'react-scroll';
import "./QNA.css"

function QNApage() {

    const [activeQNA, setActiveQNA] = useState([]);

    const toggleClickQNA = (index) => {
        if (activeQNA.includes(index)) {
            // 이미 열려 있으면 닫기
            setActiveQNA(activeQNA.filter((item) => item !== index));
        } else {
            // 닫혀 있으면 열기
            setActiveQNA([...activeQNA, index]);
        }
    };

    const qnaContents = [
        "Q1. 코딩 경험이 없어도 지원할 수 있나요?",
        "Q2. 2학기에도 아기사자를 모집하나요?",
        "Q3. 지원 결과는 어떻게 확인하나요?",
        "Q4. 학년 제한이 있나요?",
        "Q5. 트랙간 중복지원이 가능한가요?",
        "Q6. 언어모델 생성형 AI를 사용해 자기소개서를 작성해도 되나요?",
        "Q7. 동아리 관련 문의는 어디로 하나요?"
    ]

    const qnaAnswer = [
        "물론입니다. 코딩이나 디자인에 대한 경험이 없어도, 열정과 성장에 대한 의지만 있다면 지원 가능합니다.\n삼육멋사는 새로운 도전에 열려 있는 마음과 원동력을 가진 분들을 기다리고 있어요",
        "멋쟁이사자처럼은 1년 단위로 활동하므로 2학기에는 모집하지 않습니다.",
        "지원서에 작성해주신 이메일 주소로 결과 안내 메일을 보내드립니다.",
        "학년 제한은 없습니다. 1년 동안 열정적으로 성실히 활동하실 수 있다면 지원 가능합니다.",
        "트랙간 중복지원은 불가합니다. 중복 지원자의 경우 지원 내역 모두 무효처리됩니다.",
        "삼육대학교 멋쟁이사자처럼 운영진은 생성형 AI 모델의 결과와 모든 지원 서류 내용을 철저하게 대조하여 평가합니다.\n만일 유사한 내용이 발견될 경우, 이를 평가에 반영할 예정입니다. 따라서 자기소개서는 반드시 지원자 개인이 직접 \n작성하여 주시길 바랍니다.",
        "카카오톡 채널 ‘멋쟁이사자처럼 삼육대학교’ 1:1 채팅 또는 인스타그램 @likelion_syu 멋쟁이사자처럼 at 삼육대학교\nDM 문의 부탁드립니다."
    ]

    return (
        <Element name="FAQ" className="QNA-container">
            <div className="QNA-header-container">
                <div className="QNA-header-text">
                    <div className="QNA-header-mainText">FAQ<br />자주 묻는 질문</div>
                    <div className="QNA-header-subText">많이 물어보시는 질문들에 대해 답변해드릴게요.</div>
                </div>
                <div className="QNA-header-Icon">
                    <div className="QNA-header-mouseIcon">
                        <img src={mouseIcon} alt="mouse-icon" />
                    </div>
                    <div className="QNA-header-mouseIconText">이런 점이 궁금해요!</div>
                </div>
            </div>
                <ul className="QNA-qna-container">
                    {qnaContents.map((content, index) => (
                        <li key={index}>
                            <div className="qna-DropDown">
                                <div
                                    className={`qnaContents-menu ${activeQNA.includes(index) ? 'qnaContents-menu-active' : ''}`}
                                    onClick={() => toggleClickQNA(index)}
                                >
                                    {content}
                                    <img
                                        src={activeQNA.includes(index) ? dropupIcon : dropdownIcon}
                                        alt={activeQNA.includes(index) ? 'up' : 'down'}
                                    />
                                </div>
                                {activeQNA.includes(index) && (
                                    <div className="qnaAnswer-menu">{qnaAnswer[index]}</div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
        </Element>
    );
}

export default QNApage