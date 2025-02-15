import "./Schedule.css";
import dot2 from "../images/2dot.png"
import dot16 from "../images/16dot.png"
import dot12 from "../images/12dot.png"
import dot15 from "../images/15dot.png"



function Schedule() {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const weeks = [
        [23, 24, 25, 26, 27, 28, "3/1"],
        [2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22],
    ];

    const selectedDates = [28, 3, 4, 5, 6, 7, 10, 11];
    const leftDates = [27, 2, 9];
    const rightDates = ["3/1", 8];
    const downRightDates = [14];
    const downDates = [15];
    const highlightedDates = [16];
    const leftFilledDates = [12];


    return (
        <div className="schedule-container">
            <div className="schedule-title">
                멋쟁이사자처럼 삼육대학교 <br />
                13기 모집일정
            </div>

            <div className="dot2-container">
                <div className="dot2-text">
                    02/27(목) - 03/9 (일) <br />
                    <span>서류 모집 (18시 마감)</span>
                </div>
                <div className="dot2-img">
                    <img src={dot2} alt="" />
                </div>
            </div>    

            <div className="dot16-container">
                <div className="dot16-text">
                    3/16(일) <br />
                    <span>면접 결과 발표</span>
                </div>
                <div className="dot16-img">
                    <img src={dot16} alt="" />
                </div>
            </div>

            <div className="dot15-container">
                <div className="dot15-img">
                    <img src={dot15} alt="" />
                </div>
                <div className="dot15-text">
                    3/14(금)-3/16(일) <br />
                    <span>면접</span>
                </div>
            </div>

            <div className="dot12-container">
                <div className="dot12-img">
                    <img src={dot12} alt="" />
                </div>
                <div className="dot12-text">
                    3/12(수)<br />
                    <span>서류 결과 발표</span>
                </div>
            </div>

            <div className="calendar-container">
                <div className="weekdays">
                    {daysOfWeek.map((day, index) => (
                    <div key={index} className="weekday">
                        {day}
                    </div>
                    ))}
                </div>

                <div className="calendar-grid">
                    {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className={`week-row week-${weekIndex + 1}`}>
                        {week.map((day, dayIndex) => {
                        const isSelected = selectedDates.includes(day);
                        const isLeft = leftDates.includes(day);
                        const isRight = rightDates.includes(day);
                        const isdownRightDates = downRightDates.includes(day);
                        const isDown = downDates.includes(day);
                        const isHighlighted = highlightedDates.includes(day);
                        const isLeftFilled = leftFilledDates.includes(day);

                        return (
                            <div
                            key={dayIndex}
                            className={`calendar-day 
                                ${isSelected ? "selected" : ""}
                                ${isRight ? "rightDates" : ""}
                                ${isDown ? "downDates" : ""}
                                ${isdownRightDates ? "downRightDates" : ""}
                                ${isHighlighted ? "highlighted-day" : ""} // 강조 클래스 추가
                                ${isLeftFilled ? "left-filled" : ""} 
                                ${isLeft ? "leftDates" : ""}`}
                            data-day={isLeftFilled ? day : ""}
                            >
                            {!isLeftFilled && day}
                            </div>
                        );
                        })}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Schedule;