import React from 'react';
import './ActivityPage.css';
import penTool from '../images/pentool2.png'
import sessionImg from '../images/session.png'
import ideatoneImg from '../images/ideatone.png'
import hackImg from '../images/hack.png'
import pythonImg from '../images/python.png'


function ActivityPage() {
    return (
        <div className='ActivityPage-Container'>
            <div className='activity-header'>
                <div className='activity-header-content'>
                        <h1 className='activity-title'>지난<br />삼육멋사 12기는<br />이런 활동들을 했어요<br />
                        <span className='activity-subtitle'>열심히 활동했던 12기 아기사자들의 1년간의 활동을 소개합니다!</span>
                        </h1>
                    <img src={penTool} className='activity-penImg' />
                </div>
            </div>
            <div className='activity-body'>
                <div className='activity-body-session'>
                    <img src={sessionImg} className='session-img'/>
                    <div className='activity-body-desc-1'>
                        <h2 className='desc-num'>01</h2>
                        <h2 className='desc-name'>멋쟁이사자처럼 <span className='pink-color'>정기 세션</span><br />함께 성장하는 시간</h2>
                        <span className='desc-main'>개발, 기획, 디자인까지 실무 중심의 배움과 네트워킹을 경험하세요. <br />
                        매주 새로운 인사이트와 실전 노하우를 얻을 수 있는 기회!</span>
                    </div>
                </div>
                <div className='activity-body-idea'>
                    <div className='activity-body-desc-2'>
                        <h2 className='desc-num'>02</h2>
                        <h2 className='desc-name'>멋쟁이사자처럼 <span className='blue-color'>아이디어톤</span><br />에서 창의력을 펼쳐보세요</h2>
                        <span className='desc-main'>문제 해결을 위한 참신한 아이디어를 고민해보는 특별한 기회<br />
                        아이디어톤 전국 3등! 우리 학교의 아이디어가 전국에서 빛났습니다!</span>
                    </div>
                    <img src={ideatoneImg} className='idea-img'/>
                </div>
                <div className='activity-body-hack'>
                    <img src={hackImg} className='hack-img'/>
                    <div className='activity-body-desc-3'>
                        <h2 className='desc-num'>03</h2>
                        <h2 className='desc-name'>멋쟁이사자처럼 대학의 꽃! <br /> <span className='green-color'>중앙 해커톤</span></h2>
                        <span className='desc-main'>멋쟁이사자처럼 중앙 해커톤에서 아이디어를 현실로 구현해 볼 수 있는 경험. <br />
                        개발자, 디자이너, 기획자가 한 팀이 되어 프로젝트를 만들어보세요!</span>
                    </div>
                </div>
                <div className='activity-body-python'>
                    <div className='activity-body-desc-4'>
                        <h2 className='desc-num'>04</h2>
                        <h2 className='desc-name'>멋쟁이사자처럼 <span className='yellow-color'>연합해커톤</span><br />다양한 캠퍼스와 함께하는 협업 경험!</h2>
                        <span className='desc-main'>타대학 멋사인들과 협력하며 프로젝트를 완성한 결과<br />
                        아이디어톤 전국 3등! 우리 학교의 아이디어가 전국에서 빛났습니다! <br />
                        삼육멋사가 소속된 팀에서 대상 & 최우수상 & 우수상을 수상했습니다.
                        </span>
                    </div>
                    <img src={pythonImg} className='python-img'/>
                </div>
            </div>
        </div>
    )

}

export default ActivityPage;