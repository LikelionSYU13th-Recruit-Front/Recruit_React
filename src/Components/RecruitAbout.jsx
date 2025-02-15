import './RecruitAbout.css';
import union1 from '../images/union1.png';
import union2 from '../images/union2.png';
import logo13th1 from '../images/logo13th1.png';
import { Element } from 'react-scroll';

function RecruitAbout() {
    return (
        <Element name="RecruitAbout" className="RecruitAbout-Container">
            <div className="RecruitAbout-LikelionLogo">
                <img src={logo13th1} alt="logo13th1" />
            </div>
            <div className="RecruitAbout-Intro">
                <div className="RecruitAbout-Intro-Title">
                    <div className="RecruitAbout-Intro-top">
                        <img src={union1} alt="" />
                        <div className="RecruitAbout-Intro-Title-1">LIKELION at SYU</div>
                    </div>
                    <div className="RecruitAbout-Intro-bottom">
                        <div className="RecruitAbout-Intro-Title-2">멋쟁이사자처럼 삼육대학교</div>
                        <img src={union2} alt="" />
                    </div>
                </div>
                <div className="RecruitAbout-Intro-Description">
                    테크 기반의 아이디어 실현을 위한 전국 최대 규모의 대학 연합 IT 동아리로<br />
                    전공 상관없이 다양한 전공자들이 모여 아이디어를 실현하는<br />
                    삼육대학교 중앙동아리,SW 동아리이자 전국 NN개의 대학과 함께하는 연합 동아리입니다.
                </div>
            </div>
        </Element>
    )
}

export default RecruitAbout;
