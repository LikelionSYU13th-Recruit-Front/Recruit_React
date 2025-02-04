import React from 'react';
import './ActivityPage.css';
import penTool from '../images/pentool2.png'


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
        </div>
    )

}

export default ActivityPage;