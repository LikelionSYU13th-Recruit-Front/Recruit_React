import './Complete.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

function Complete() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            scroller.scrollTo(location.hash.replace('#', ''), {
                smooth: true,
                duration: 1500,
            });
        }
    }, [location]);

    const handleScrollTo = (section) => {
        if (location.pathname !== '/') {
            navigate(`/#${section}`);
        } else {
            scroller.scrollTo(section, { smooth: true, duration: 1500 });
        }
    };

    return (
        <div className="JoinComplete-Container">
            <div className="JoinComplete-Container-comment1">지원서가 제출되었습니다!</div>
            <div className="JoinComplete-Container-comment2">
                귀중한 시간 내어 지원해주셔서 감사합니다.<br />
                지원 서류 결과는 3월 12일 수요일 자정에 이메일로 전송될 예정입니다.
            </div>
            <div className="JoinComplete-Container-comment3">
                <button 
                    className="JoinComplete-Container-button1" 
                    onClick={() => handleScrollTo('schedule')}
                >
                    13기 모집 일정보기
                </button>
                <button 
                    className="JoinComplete-Container-button2" 
                    onClick={() => handleScrollTo('FAQ')}
                >
                    자주 묻는 질문 보기
                </button>
            </div>
        </div>
    );
}

export default Complete;
