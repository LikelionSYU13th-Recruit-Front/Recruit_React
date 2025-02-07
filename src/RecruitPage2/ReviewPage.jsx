import React from 'react';
import './ReviewPage.css';
import HeaderArrow from '../images/headerarrow.png';
import PinkLion from '../images/VectorPink.png';
import BlueLion from '../images/VectorBlue.png';
import YellowLion from '../images/VectorYellow.png';

function ReviewPage() {
    return (
        <div className='reviewpage-container'>
            <div className='review-header'>
                <h1 className='review-header-content'>
                    삼육멋사 12기<br />
                    아기사자들의 <span className='review-header-blue'>생생한 후기</span>
                    <img src={HeaderArrow} className='header-arrow' />
                </h1>
            </div>
            <div className='review-body'>
                <h3 className='review-track-design'>기획 & UX/UI 디자인</h3>
                <div className='review-design-boxes'>
                    <div className='review-box-1'>
                        <div className='review-box-header'>
                            <img src={PinkLion} className='lion-logo' />
                            <p className='header-title-design'>든든한 인생 서포터</p>
                            <p className='header-name-1'>현O진</p>
                        </div>


                    </div>
                    <div className='review-box-2'>
                        <div className='review-box-header'>
                            <img src={PinkLion} className='lion-logo' />
                            <p className='header-title-design'>기획, 디자인에 관심있는 누구나</p>
                            <p className='header-name-2'>김O나</p>
                        </div>


                    </div>
                </div>
                <h3 className='review-track-frontend'>프론트엔드</h3>
                <div className='review-frontend-boxes'>
                    <div className='review-box-1'>
                        <div className='review-box-header'>
                            <img src={BlueLion} className='lion-logo' />
                            <p className='header-title-frontend'>멋사 더 빨리 들어갈 걸</p>
                            <p className='header-name-3'>심O영</p>
                        </div>


                    </div>
                    <div className='review-box-2'>
                        <div className='review-box-header'>
                            <img src={BlueLion} className='lion-logo' />
                            <p className='header-title-frontend'>멋사는 하는게 이득!</p>
                            <p className='header-name-4'>장O익</p>
                        </div>

                    </div>
                </div>
                <h3 className='review-track-backend'>백엔드</h3>
                <div className='review-backend-boxes'>
                    <div className='review-box-1'>
                        <div className='review-box-header'>
                            <img src={YellowLion} className='lion-logo' />
                            <p className='header-title-backend'>모두가 알았으면 하는 멋사</p>
                            <p className='header-name-5'>권O진</p>
                        </div>



                    </div>
                    <div className='review-box-2'>
                        <div className='review-box-header'>
                            <img src={YellowLion} className='lion-logo' />
                            <p className='header-title-backend'>개발 자신감을 지탱하는 디딤돌</p>
                            <p className='header-name-6'>김O현</p>
                        </div>


                    </div>
                </div>



            </div>
        </div>

    )
}

export default ReviewPage;