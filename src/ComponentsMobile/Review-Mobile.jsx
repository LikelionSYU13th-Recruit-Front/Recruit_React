import React from 'react';
import './Review-Mobile.css'

import ReviewSlide from './ReviewSlide';

import HeaderArrow from '../images/headerarrow.png';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReviewMobile() {
    
    return (
        <div className='Review-Mobile-Container'>
            <div className='review-mobile-header'>
                <h1 className='review-mobile-title'>
                    삼육멋사 12기<br />
                    아기사자들의 <span className='review-title-blue'>생생한 후기</span>
                </h1>
                <img src={HeaderArrow} className='header-arrow-mobile' />
                <div className='from-12th-mobile'>
                    <p className='from-text-mobile'>FROM. 12th</p>
                </div>
            </div>
            <div className='review-mobile-body'>
                <ReviewSlide />
            </div>

        </div>
    )
}
export default ReviewMobile;