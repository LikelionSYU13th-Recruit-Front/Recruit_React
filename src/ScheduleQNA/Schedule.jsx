import "./Schedule.css";

export default function SchedulePage() {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const weeks = [
        [23, 24, 25, 26, 27, 28, "3/1"],
        [2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22],
    ];

    return (
        <div className="schedule-container">
            <div className="schedule-title">
                멋쟁이사자처럼 삼육대학교 <br />
                13기 모집일정
            </div>
            <div className="calendar-container">
                <div className="days-of-week">
                    {daysOfWeek.map((day, index) => (
                        <span key={index} className="day">{day}</span>
                    ))}
                </div>
                <div className="weeks-container">
                    {weeks.map((week, rowIndex) => (
                        <div key={rowIndex} className="week-row">
                            {week.map((day, colIndex) => {
                                const isBlueBackground = (day >= 27 || day <= 9 || day==='3/1');
                                
                                return(
                                    <span key={colIndex} className={`day ${isBlueBackground ? 'day-blue-background' : ''}`}>
                                        {day}
                                    </span>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
