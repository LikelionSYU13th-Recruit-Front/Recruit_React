import './RecruitAbout-Mobile.css';
import union1 from '../images/union1.png';
import union2 from '../images/union2.png';
import logo13th1 from '../images/logo13th1.png';
import { Element } from 'react-scroll';

function RecruitAbout() {
    return (
        <Element name="RecruitAbout" className="RecruitAbout-Container-Mobile">
            <div className="RecruitAbout-Intro-Title-Mobile">
                <div className="RecruitAbout-Intro-Title-InBox-Mobile">
                    <div className="RecruitAbout-Intro-top-Mobile">
                        <img src={union1} alt="" />
                        <div className="RecruitAbout-Intro-Title-1-Mobile">LIKELION at SYU</div>
                    </div>
                    <div className="RecruitAbout-Intro-bottom-Mobile">
                        <div className="RecruitAbout-Intro-Title-2-Mobile">멋쟁이사자처럼 삼육대학교</div>
                        <img src={union2} alt="" />
                    </div>
                </div>
            </div>

            <div className="RecruitAbout-LikelionLogo-Mobile">
                <img src={logo13th1} alt="logo13th1" />
            </div>
            
            <div className="RecruitAbout-Intro-Description-Mobile">
                테크 기반의 아이디어 실현을 위한<br />
                전국 최대 규모의 대학 연합 IT 동아리로 전공 상관없이<br />
                다양한 전공자들이 모여 아이디어를 실현하는<br />
                삼육대학교 중앙동아리,SW 동아리이자 전국 연합 동아리입니다.<br /><br />
                사단법인 멋쟁이사자처럼의 각종 스터디와 네트워킹,<br />
                행사 지원을 통해 다양한 기회를 접하고<br />
                멋사인들과 함께 성장할 수 있습니다!
            </div>
        </Element>
    )
}

export default RecruitAbout;
