import React, { useEffect } from 'react';
import './BabyLion-Mobile.css';

function BabyLionMobile() {
    return(
        <div className='babyLion-mobile-contatiner'>
            <div className='babylion-mobile-header'>
                <h1 className='babylion-mobile-title'>이런 아기사자들을 <br />
                기다리고 있어요!</h1>
            </div>
            <div className='babylion-mobile-main'>
                <div className='baby-mobile-row-1'>
                    <div className='baby-mobile-box-1'>
                        <p className='babylion-mobile-num'>01</p>
                        <p className='babylion-mobile-content'>
                            매주 목요일 5시에 진행되는 <br />
                            정규 세션에 참여할 수 있는 사람<br />
                            <span className='mobile-except'>(시험기간 제외)</span>
                        </p>
                    </div>
                    <div className='baby-mobile-box-2'>
                        <p className='babylion-mobile-num'>02</p>
                        <p className='babylion-mobile-content'>
                            외부대학과 교류하며 <br />
                            다양한 네트워킹을 <br /> 
                            쌓고 싶은 사람
                        </p>
                    </div>
                </div>
                <div className='baby-mobile-row-2'>
                    <div className='baby-mobile-box-1'>
                        <p className='babylion-mobile-num'>03</p>
                        <p className='babylion-mobile-content'>
                            개발, 기획 및 <br />
                            UX/UI 디자인에 <br />
                            대한 학습 의욕을 가진 사람
                        </p>
                    </div>
                    <div className='baby-mobile-box-2'>
                        <p className='babylion-mobile-num'>04</p>
                        <p className='babylion-mobile-content'>
                            끊임없는 열정과 <br />
                            성장에 대한 <br />
                            강한 의지를 가진 사람
                        </p>
                    </div>
                </div>
                <div className='baby-mobile-row-3'>
                    <div className='baby-mobile-box-1'>
                        <p className='babylion-mobile-num'>05</p>
                        <p className='babylion-mobile-content'>
                            소통 능력을 바탕으로 <br />
                            원활한 협업을 <br />
                            이끌어낼 수 있는 사람
                        </p>
                    </div>
                    <div className='baby-mobile-box-2'>
                        <p className='babylion-mobile-num'>06</p>
                        <p className='babylion-mobile-content'>
                            주도적으로 활동에 참여하고 <br />
                            새로운 아이디어를 <br />
                            제안하는 사람
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BabyLionMobile;