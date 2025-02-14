import { useState } from "react";
import axios from "axios";
import './postExample.css';

function postExample() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    studentNum: "",
    phoneNum: "",
    email: "",
    laptop: null,
    session: null,
    track: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    studentNum: false,
    phoneNum: false,
    email: false,
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
    setFormData({ ...formData, track });
    setErrors((prev) => ({ ...prev, track: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach((key) => {
      if (key !== 'q5' && formData[key] === "") {
        validationErrors[key] = true;
        isValid = false;
      }
    });

    for (let i = 1; i <= 4; i++) {
      if (formData[`q${i}`] === "") {
        validationErrors[`q${i}`] = true;
        isValid = false;
      }
    }

    if (!selectedTrack) {
      validationErrors.track = true;
      isValid = false;
    }

    setErrors(validationErrors);
    if (!isValid) {
      return;
    }
    try {
      console.log(formData);
      await axios.post("https://syu-likelion.org/applications", formData);
      alert("성공이요");
    } catch (error) {
      alert("에러요");
    }
  };

  const questions = {
    PRODUCT_DESIGN: [
      "1. 멋쟁이사자처럼 삼육대학교에 지원하게 된 동기와 해당 트랙을 선택하신 이유가 무엇인가요? (0/500)",
      "2. 본인의 협업 경험에 대해 소개해 주세요! 코딩 또는 디자인 경험이 아니어도 무방합니다. (0/300)",
      "3. 삼육멋사와 함께 진행하고 싶은 프로젝트에 대해 설명해주세요. (0/500)",
      "4. 평소 사용하던 어플 중 UX/UI가 좋다고 느낀 어플은 무엇인가요? 그 이유를 설명해주세요. (0/500)",
    ],
    FRONTEND: [
      "1. 멋쟁이사자처럼 삼육대학교에 지원하게 된 동기와 해당 트랙을 선택하신 이유가 무엇인가요? (0/500)",
      "2. 본인의 개발 경험에 대해 소개해 주세요!  (사용 가능한 언어 / 관심있는 기술스택 / 프로젝트 경험 등) (0/500)",
      "3. 삼육멋사와 함께 진행하고 싶은 프로젝트에 대해 설명해주세요. (0/500)",
      "4. 본인이 정의 해보는 프론트엔드 특징은 무엇인가요? (0/300)",
    ],
    BACKEND: [
      "1. 멋쟁이사자처럼 삼육대학교에 지원하게 된 동기와 해당 트랙을 선택하신 이유가 무엇인가요? (0/500)",
      "2. 본인의 협업 경험에 대해 소개해 주세요! 코딩 또는 디자인 경험이 아니어도 무방합니다. (0/300)",
      "3. 삼육멋사와 함께 진행하고 싶은 프로젝트에 대해 설명해주세요. (0/500)",
      "4. '백엔드'의 개념이나 특징 등을 본인만의 방식으로 정의해 주세요. (0/300)",
    ],
  };

  const placeholders = [
    "500자 이하로 입력해주세요",
    "300자 이하로 입력해주세요",
    "500자 이하로 입력해주세요",
    "300자 이하로 입력해주세요",
  ];

  return (
    <div className="PostContainer">
      <div className="PostContainer-Title">멋쟁이사자처럼 삼육대학교<br />13기 지원하기</div>
      <div className="PostContainer-Notice-Box">
      <div className="PostContainer-Notice">
        <div className="PostContainer-Notice-Top">지원 전 읽어주세요!</div>
        <div className="PostContainer-Notice-Bottom">13기 삼육멋사 지원서는 제출 후 조회 및 수정이 불가능합니다.<br />
          재작성하여 다시 제출하더라도 최초 제출된 지원서로 평가되니,<br />
          제출 전 지원 내용을 신중히 검토하시기 바랍니다.</div>
        </div>
      </div>
      <form className="PostContainer-Contents" onSubmit={handleSubmit}>
        <div className="PostContainer-InfoBox">
          <div className="PostContainer-Contents-Name">
            <div className="PostContainer-Contents-Name-Label ">이름</div>
            <input className={`PostContainer-Contents-Name-Inputbox ${errors.name ? 'error-input' : ''}`} type="text" name="name" placeholder="이름을 입력해주세요" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error-text">*필수 입력 항목입니다.</span>}
          </div>
          <div className="PostContainer-Contents-studentNum">
            <div className="PostContainer-Contents-studentNum-Label">학번</div>
            <input className={`PostContainer-Contents-studentNum-Inputbox ${errors.studentNum ? 'error-input' : ''}`} type="text" name="studentNum" placeholder="2025123456" value={formData.studentNum} onChange={handleChange} />
            {errors.studentNum && <span className="error-text">*필수 입력 항목입니다.</span>}
          </div>
          <div className="PostContainer-Contents-phoneNum">
            <div className="PostContainer-Contents-phoneNum-Label">전화번호</div>
            <input className={`PostContainer-Contents-phoneNum-Inputbox ${errors.phoneNum ? 'error-input' : ''}`} type="text" name="phoneNum" placeholder="010-XXXX-XXXX" value={formData.phoneNum} onChange={handleChange} />
            {errors.phoneNum && <span className="error-text">*필수 입력 항목입니다.</span>}
          </div>
          <div className="PostContainer-Contents-email">
            <div className="PostContainer-Contents-email-Label">메일</div>
            <div className="PostContainer-Contents-email-Box">
              <input className={`PostContainer-Contents-email-Inputbox ${errors.email ? 'error-input' : ''}`} type="email" name="email" placeholder="likelion36@likelion.org" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error-text">*필수 입력 항목입니다.</span>}
              <div className="PostContainer-Contents-email-Notice">
                작성해주신 이메일 주소로 결과 안내 이메일을 발송해 드립니다.<br />
                제출 전, 올바른 이메일 주소를 입력하셨는지 확인하여 주시기 바랍니다.
              </div>
            </div>
          </div>
        </div>
        <div className="PostContainer-ContentsSelect">
          <div className="PostContainer-ContentsSelect-laptop">
            <div className="PostContainer-ContentsSelect-laptop-label">1. 노트북 소지여부</div>
            <div className="PostContainer-ContentsSelect-laptop-radio">
              <label className="custom-radio">
                <input
                  className="PostContainer-ContentsSelect-laptop-radioButton"
                  type="radio"
                  name="laptop"
                  value="true"
                  checked={formData.laptop === true}
                  onChange={() => handleChange({ target: { name: "laptop", value: true } })}
                />
                예, 노트북을 소지하고 있습니다.
              </label>
              <label className="custom-radio">
                <input
                  className="PostContainer-ContentsSelect-laptop-radioButton"
                  type="radio"
                  name="laptop"
                  value="false"
                  checked={formData.laptop === false}
                  onChange={() => handleChange({ target: { name: "laptop", value: false } })}
                />
                아니오, 노트북을 소지하고 있지 않습니다.
              </label>
              <div className="PostContainer-ContentsSelect-laptop-notice">멋쟁이사자처럼의 활동에는 개인 노트북이 필요하며 동아리에서는 노트북을 지원하지 않습니다.</div>
            </div>
          </div>
          <div className="PostContainer-ContentsSelect-session">
            <div className="PostContainer-ContentsSelect-session-label">2. 멋쟁이사자처럼 삼육대학교의 정기세션은 매주 화요일 n시입니다. 참여 가능하신가요?</div>
            <div className="PostContainer-ContentsSelect-session-radio">
              <label className="custom-radio">
                <input
                  className="PostContainer-ContentsSelect-session-radioButton"
                  type="radio"
                  name="session"
                  value="true"
                  checked={formData.session === true}
                  onChange={() => handleChange({ target: { name: "session", value: true } })}
                />
                예, 참여 가능합니다.
              </label>
              <label className="custom-radio">
                <input
                  className="PostContainer-ContentsSelect-session-radioButton"
                  type="radio"
                  name="session"
                  value="false"
                  checked={formData.session === false}
                  onChange={() => handleChange({ target: { name: "session", value: false } })}
                />
                아니오, 참여 불가합니다.
              </label>
            </div>
            <div className="PostContainer-ContentsSelect-session-notice">멋쟁이사자처럼 삼육대학교의 정기세션은 필수 참여입니다. 이후 트랙별 세션은 각 트랙별로 일정에 맞춰 조율하여 진행됩니다.</div>
          </div>
          <div className="PostContainer-ContentsSelect-Tracks">
            <div className="PostContainer-ContentsSelect-Tracks-label">3. 지원 트랙 선택해주세요.</div>
            <div className="PostContainer-ContentsSelect-Tracks-Buttons">

              <button type="button" onClick={() => handleTrackSelect("PRODUCT_DESIGN")} className={selectedTrack === "PRODUCT_DESIGN" ?
                "PostContainer-ContentsSelect-TracksD-selected" : "PostContainer-ContentsSelect-TracksD"}>기획・디자인 트랙</button>
              <button type="button" onClick={() => handleTrackSelect("FRONTEND")} className={selectedTrack === "FRONTEND" ?
                "PostContainer-ContentsSelect-TracksF-selected" : "PostContainer-ContentsSelect-TracksF"}>프론트엔드 트랙</button>
              <button type="button" onClick={() => handleTrackSelect("BACKEND")} className={selectedTrack === "BACKEND" ?
                "PostContainer-ContentsSelect-TracksB-selected" : "PostContainer-ContentsSelect-TracksB"}>백엔드 트랙</button>
            </div>
          </div>
        </div>
        {selectedTrack && (
          <div className="PostContainer-TrackQ">
            {questions[selectedTrack].map((question, index) => (
              <div className="PostContainer-TrackQ-Box" key={index}>
                <div className="PostContainer-TrackQ-Box-Top">
                <label className="PostContainer-TrackQ-question">{question}</label>
                {errors[`q${index + 1}`] && <span className="error-text">*필수 입력 항목입니다.</span>}
                </div>
                <textarea className={`PostContainer-TrackQ-answer ${errors[`q${index + 1}`]  ? 'error-input' : ''}`}
                  placeholder={placeholders[index]} type="text" name={`q${index + 1}`} value={formData[`q${index + 1}`]} onChange={handleChange} />
                
              </div>
            ))}
            <div className="PostContainer-TrackQ-Box">
              <label className="PostContainer-TrackQ-question">5. 역량을 확인할 수 있는 포트폴리오, Notion 링크가 있다면 첨부해주세요. (선택사항)</label>
              <textarea className="PostContainer-TrackQ-answer-link" placeholder="Notion 및 구글 드라이브와 같은 웹 링크를 첨부할 경우, 반드시 접근 권한 확인 후 첨부해주세요." type="text" name={"q5"} value={formData.q5} onChange={handleChange} />
            </div>
            <div className="PostContainer-Submit"><button type="submit">지원서 제출하기</button></div>
          </div>
        )}
      </form>
    </div>
  );
}

export default postExample;