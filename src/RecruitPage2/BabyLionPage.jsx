import React, { useEffect } from 'react';
import './BabyLionPage.css';

function BabyLionPage() {
    return (
        <div className='babylionpage-container'>
            <div className='babylion-header'>
                <h1 className='babylion-title'>이런 아기사자들을 <br />
                기다리고 있어요!</h1>
            </div>
            <div className='babylion-body'>
                <div className='babylion-body-first-row'>
                    <div className='babylion-first-row-box-1'>
                        <p className='babylion-box-num-1'>01</p>
                        <p className='babylion-box-content-1'>
        `                   매주 n요일 n시에 진행되는 <br />
                            정규 세션에 참여할 수 있는 사람<br />
                            <span className='except'>(시험기간 제외)</span>
                        </p>
                    </div>
                    <div className='babylion-first-row-box-2'>
                        <p className='babylion-box-num'>02</p>
                        <p className='babylion-box-content'>
                            외부대학과 교류하며 다양한 <br />
                            네트워킹을 쌓고 싶은 사람
                        </p>
                    </div>
                    <div className='babylion-first-row-box-3'>
                        <p className='babylion-box-num'>03</p>
                        <p className='babylion-box-content'>
                            개발, 기획 및 UX/UI 디자인에 <br />
                            대한 학습 의욕을 가진 사람
                        </p>
                    </div>
                </div>
                <div className='babylion-body-second-row'>
                    <div className='babylion-second-row-box-1'>
                        <p className='babylion-box-num'>04</p>
                        <p className='babylion-box-content'>
                            끊임없는 열정과 성장에 대한 <br />
                            강한 의지를 가진 사람
                        </p>
                    </div>
                    <div className='babylion-second-row-box-2'>
                        <p className='babylion-box-num'>05</p>
                        <p className='babylion-box-content'>
                            소통 능력을 바탕으로 원활한 <br />
                            협업을 이끌어낼 수 있는 사람
                        </p>
                    </div>
                    <div className='babylion-second-row-box-3'>
                        <p className='babylion-box-num'>06</p>
                        <p className='babylion-box-content'>
                            주도적으로 활동에 참여하고 <br />
                            새로운 아이디어를 제안하는 사람
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BabyLionPage;