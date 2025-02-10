import React, { useEffect } from 'react';
import './Activity-Mobile.css';

import sessionMobile from '../images/session.png'
import ideatoneMobile from '../images/ideatone.png'
import hackMobile from '../images/hack.png'
import pythonMobile from '../images/python.png'

function ActivityMobile() {
    return (
        <div className='activity-mobile-container'>
            <div className='activity-mobile-header'>
                <h1 className='activity-mobile-title'>
                    지난<br />삼육멋사 12기는<br /><span className='mobile-green-color'>이런 활동들을</span> 했어요
                </h1>
            </div>
            <div className='activity-mobile-body'>
                <img src={sessionMobile} className='sessionImg-mobile' />
                <div className='mobile-session-desc'>
                    <h3 className='mobile-desc-num'>01</h3>
                    <h3 className='mobile-desc-title'>멋쟁이사자처럼 <span className='mobile-pink-color'>정기 세션</span>, 함께 성장하는 시간</h3>
                    <p className='mobile-desc-content'> 
                        개발, 기획, 디자인까지 <br />
                        실무 중심의 배움과 네트워킹을 경험하세요. <br />
                        매주 새로운 인사이트와 실전 노하우를 얻을 수 있는 기회!
                    </p>
                </div>
                <img src={ideatoneMobile} className='ideatonImg-mobile' />
                <div className='mobile-ideaton-desc'>
                    <h3 className='mobile-desc-num'>02</h3>
                    <h3 className='mobile-desc-title'>멋쟁이사자처럼 <span className='mobile-blue-color'>아이디어톤</span>에서 <br />
                    창의력을 펼쳐보세요
                    </h3>
                    <p className='mobile-desc-content'> 
                        문제 해결을 위한 참신한 아이디어를 고민해보는 특별한 기회 <br />
                        아이디어톤 전국 3등! <br />
                        우리 학교의 아이디어가 전국에서 빛났습니다!
                    </p>
                </div>
                <img src={hackMobile} className='hackImg-mobile' />
                <div className='mobile-hack-desc'>
                    <h3 className='mobile-desc-num'>03</h3>
                    <h3 className='mobile-desc-title'>멋쟁이사자처럼 대학의 꽃! <span className='mobile-green-color'>중앙 해커톤</span></h3>
                    <p className='mobile-desc-content'> 
                        멋쟁이사자처럼 중앙 해커톤에서 아이디어를 현실로<br />
                        구현해 볼 수 있는 경험. <br />
                        개발자, 디자이너, 기획자가 한 팀이 되어 <br />
                        프로젝트를 만들어보세요!
                    </p>
                </div>
                <img src={pythonMobile} className='pythonImg-mobile' />
                <div className='mobile-python-desc'>
                    <h3 className='mobile-desc-num'>04</h3>
                    <h3 className='mobile-desc-title'>멋쟁이사자처럼 <span className='mobile-orange-color'>연합 해커톤</span><br />
                    다양한 캠퍼스와 함께하는 협업 경험!
                    </h3>
                    <div className='mobile-desc-box'>

                    </div>
                    <p className='mobile-desc-content'> 
                        학교를 넘어 열정적인 멋사인들과 프로젝트를 만들어보세요.<br />
                        타대학 멋사인들과 협력하며 프로젝트를 완성한 결과 <br />
                        삼육멋사가 소속된 팀에서 대상 & 최우수상 & 우수상을 <br />
                        수상했습니다.
                    </p>
                </div>
            </div>
        </div>

    )


}

export default ActivityMobile;