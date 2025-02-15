import './Complete.css';
import { useNavigate } from 'react-router-dom';

function Complete() {
    const navigate = useNavigate();

    navigate('/Complete');
    const handleButton1 = () => {
        navigate('/');
    }
    const handleButton2 = () => {
        navigate('/');
    }
    return (
        <div className="JoinComplete-Container">
            <div className="JoinComplete-Container-comment1">지원서가 제출되었습니다!</div>
            <div className="JoinComplete-Container-comment2">귀중한 시간 내어 지원해주셔서 감사합니다.<br />
                지원 서류 결과는 3월 12일 수요일 자정에 이메일로 전송될 예정입니다.</div>
            <div className="JoinComplete-Container-comment3">
                <button className="JoinComplete-Container-button1" onClick={handleButton1}>13기 모집 일정보기</button>
                <button className="JoinComplete-Container-button2" onClick={handleButton2}>자주 묻는 질문 보기</button>
            </div>
        </div>
    )
}

export default Complete