export default function ScheduleMobile(){

    const daysOfWeekM = ["일", "월", "화", "수", "목", "금", "토"];
    const weeksM = [
        [23, 24, 25, 26, 27, 28, "3/1"],
        [2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22],
    ];

    const selectedDatesM = [28, 3, 4, 5, 6, 7, 10, 11];
    const leftDatesM = [27, 2, 9];
    const rightDatesM = ["3/1", 8];
    const downRightDatesM = [14];
    const downDatesM = [15];
    const highlightedDatesM = [16];
    const leftFilledDatesM = [12];

    return(
        <div className="scheduleMobile-container">

            <div className="scheduleM-title">
                멋쟁이사자처럼 삼육대학교
                13기 모집일정
            </div>

            <div className="scheduleM-calendar">
                <div className="calendarMobile-container">
                    <div className="weekdaysMobile">
                        {daysOfWeekM.map((day, index) => (
                        <div key={index} className="weekday-Mobile">
                            {day}
                        </div>
                        ))}
                    </div>

                    <div className="calendarMobile-grid">
                        {weeksM.map((week, weekIndex) => (
                        <div key={weekIndex} className={`week-row-Mobile week-M${weekIndex + 1}`}>
                            {week.map((day, dayIndex) => {
                            const isSelected = selectedDatesM.includes(day);
                            const isLeft = leftDatesM.includes(day);
                            const isRight = rightDatesM.includes(day);
                            const isdownRightDates = downRightDatesM.includes(day);
                            const isDown = downDatesM.includes(day);
                            const isHighlighted = highlightedDatesM.includes(day);
                            const isLeftFilled = leftFilledDatesM.includes(day);

                            return (
                                <div
                                key={dayIndex}
                                className={`calendar-dayM 
                                    ${isSelected ? "selectedM" : ""}
                                    ${isRight ? "rightDatesM" : ""}
                                    ${isDown ? "downDatesM" : ""}
                                    ${isdownRightDates ? "downRightDatesM" : ""}
                                    ${isHighlighted ? "highlighted-dayM" : ""} 
                                    ${isLeftFilled ? "left-filledM" : ""} 
                                    ${isLeft ? "leftDatesM" : ""}`}
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

            <div className="scheduleM-detail">
                <div className="scheduleM-detail-1">
                    <div className="point"></div>
                    <div className="schedule-detail-1-text">
                        02/27(목) - 03/12(수) 
                        <span>서류 모집 (18시 마감)</span>
                    </div>
                </div>
                <div className="scheduleM-detail-2">
                    <div className="point"></div>
                    <div className="schedule-detail-2-text">
                        03/12(수) 
                        <span>서류 평가</span>
                    </div>
                </div>
                <div className="scheduleM-detail-3">
                    <div className="point"></div>
                    <div className="schedule-detail-3-text">
                        3/14(금)-3/16(일) 
                        <span>면접</span>
                    </div>                    
                </div>
                <div className="scheduleM-detail-4">
                    <div className="point"></div>
                    <div className="schedule-detail-4-text">
                        03/16(일)
                        <span>면접 결과 발표</span>
                    </div>   
                </div>
            </div>

        </div>
    )
}