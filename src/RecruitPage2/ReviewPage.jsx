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
                        <div className='review-content-box'>
                            <p className='review-content'>
                                대학교 입학 후, 꿈을 향해 오직 스스로의 힘만으로 나아가야 <br />
                                한다는 생각에 막막했었는데, 멋쟁이사자처럼에 들어와 <br />
                                피그마와 디자인, 그리고 협업에 대해 하나씩 배우고 <br />
                                아이디어톤, 해커톤과 같은 대회도 참가해 보며 <br />
                                조금 더 수월하게 꿈을 향해 한 발짝씩 다가갈 수 있게 되었어요.
                            </p>
                        </div>


                    </div>
                    <div className='review-box-2'>
                        <div className='review-box-header'>
                            <img src={PinkLion} className='lion-logo' />
                            <p className='header-title-design'>기획, 디자인에 관심있는 누구나</p>
                            <p className='header-name-2'>김O나</p>
                        </div>
                        <div className='review-content-box'>
                            <p className='review-content'>
                                피그마를 한 번도 사용해 본 적이 없어서 잘 해낼 수 있을까  <br />
                                걱정을 많이 했었지만, 처음부터 차근차근 잘 알려주셔서 <br />
                                쉽게 배울 수 있었어요. <br />
                                여러 활동들도 하면서 팀 프로젝트 경험을 <br />
                                할 수 있다는 게 가장 좋았어요!
                            </p>
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
                        <div className='review-content-box'>
                            <p className='review-content'>
                                언어만 조금 다룰 줄 아는 상태로 들어가서 <br />
                                걱정했지만 열심히 했더니 13기 모집 페이지까지  <br />
                                만들 수 있는 실력을 갖추게 되었습니다.<br />
                                또한 멋사를 통해 여러 대회에 참여할 기회가 있었고<br />
                                열심히 참여했더니 많은 것을 얻어갈 수 있었습니다!
                            </p>
                        </div>


                    </div>
                    <div className='review-box-2'>
                        <div className='review-box-header'>
                            <img src={BlueLion} className='lion-logo' />
                            <p className='header-title-frontend'>멋사는 하는게 이득!</p>
                            <p className='header-name-4'>장O익</p>
                        </div>
                        <div className='review-content-box'>
                            <p className='review-content'>
                                학교에서 배우지 않은 것들을 배울 수 있어 좋았고,  <br />
                                여러 대회를 경험하며 많은 것을 얻어갈 수 있었습니다<br />
                                멋쟁이사자처럼에서 얻은 경험과 지식들이 무수히 많았기<br />
                                때문에 프론트엔드에 관심이 있거나, 동아리 지원을 고민<br />
                                하고 있는 학우분들에게 꼭 멋쟁이사자처럼을 <br />
                                추천드리고 싶습니다.
                            </p>
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
                        <div className='review-content-box'>
                            <p className='review-content'>
                                멋쟁이사자처럼 12기와 함께한 2024년은 저에게 있어 값 <br />
                                진 성장의 시간이었습니다. 다가오는 2025년에는 13기  <br />
                                아기사자 여러분과 함께 더욱 발전하고 성장할 수 있는 <br />
                                뜻깊은 기회가 되기를 기대합니다.
                            </p>
                        </div>



                    </div>
                    <div className='review-box-2'>
                        <div className='review-box-header'>
                            <img src={YellowLion} className='lion-logo' />
                            <p className='header-title-backend'>개발 자신감을 지탱하는 디딤돌</p>
                            <p className='header-name-6'>김O현</p>
                        </div>
                        <div className='review-content-box'>
                            <p className='review-content'>
                                멋쟁이사자처럼에서의 경험은 단순한 기술 습득 이상의 <br />
                                의미가 있었어요. 웹 개발의 핵심인 MVC 패턴을 통해  <br />
                                프론트엔드와 백엔드가 어떻게 유기적으로 소통하는지 <br />
                                배웠고, CRUD 기능을 구현해볼 수 있게 되었습니다.<br />
                                멋사에서의 경험을 발판으로,  얻은 지식과 열정을 앞으로 <br />
                                의 개발자 생활에서 마음껏 펼쳐나가고 싶습니다.
                            </p>
                        </div>


                    </div>
                </div>



            </div>
        </div>

    )
}

export default ReviewPage;