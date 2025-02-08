// import "./Schedule.css";

// export default function SchedulePage() {
//     const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
//     const weeks = [
//         [23, 24, 25, 26, 27, 28, "3/1"],
//         [2, 3, 4, 5, 6, 7, 8],
//         [9, 10, 11, 12, 13, 14, 15],
//         [16, 17, 18, 19, 20, 21, 22],
//     ];

//     return (
//         <div className="schedule-container">
//             <div className="schedule-title">
//                 멋쟁이사자처럼 삼육대학교 <br />
//                 13기 모집일정
//             </div>
//             <div className="calendar-container">
//                 <div className="days-of-week">
//                     {daysOfWeek.map((day, index) => (
//                         <span key={index} className="day">{day}</span>
//                     ))}
//                 </div>
//                 <div className="weeks-container">
//                     {weeks.map((week, rowIndex) => (
//                         <div key={rowIndex} className="week-row">
//                             {week.map((day, colIndex) => {
//                                 const isHighlightedBlue =
//                                     (rowIndex === 0 && colIndex >= 4) || // 27~3/1
//                                     (rowIndex === 1) || // 2~8
//                                     (rowIndex === 2 && colIndex <= 3); // 9~12
                                
//                                 const isHighlightedGray =
//                                     (rowIndex === 2 && (colIndex === 5 || colIndex === 6)); // 14~15

//                                 const isLeftRounded =
//                                     (rowIndex === 0 && colIndex === 4) || 
//                                     (rowIndex === 1 && colIndex === 0) || 
//                                     (rowIndex === 2 && colIndex === 0) || 
//                                     (rowIndex === 2 && colIndex === 5); // 14일 

//                                 const isRightRounded =
//                                     (rowIndex === 0 && colIndex === 6) || 
//                                     (rowIndex === 1 && colIndex === 6) || 
//                                     (rowIndex === 2 && colIndex === 3) || 
//                                     (rowIndex === 2 && colIndex === 6); // 15일 
//                                 return (
//                                     <span
//                                         key={colIndex}
//                                         data-day={day === 12 ? "12" : ""}
//                                         className={`day-cell
//                                             ${isHighlightedBlue ? "highlighted-blue" : ""}
//                                             ${isHighlightedGray ? "highlighted-gray" : ""}
//                                             ${isLeftRounded ? "rounded-left" : ""}
//                                             ${isRightRounded ? "rounded-right" : ""}
//                                         `}
//                                     >
//                                         {day}
//                                     </span>
//                                 );
//                             })}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }



import "./Schedule.css";

function schedulePage() {
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
                    <div key={weekIndex} className="week-row">
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

export default schedulePage;