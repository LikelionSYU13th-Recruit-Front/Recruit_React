import Slider from "react-slick";
import './ReviewSlide.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PinkLion from '../images/VectorPink.png';
import BlueLion from '../images/VectorBlue.png';
import YellowLion from '../images/VectorYellow.png';


function ReviewSlide() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="Slider-Container">
            <Slider {...settings}>
                <div className="TrackSlider">
                    <div className="Slider-DE">
                        <img src={PinkLion} className="lion-logo" />
                        기획 & UI/UX 디자인
                    </div>
                    <div className="Slider-DE-Body">
                        <div className="Slider-DE-Body-Title">
                            <div className="Slider-DE-Body-Title-Content-1">기획, 디자인에 관심있는 누구나</div>
                            <div className="Slider-DE-Body-Title-Name">김O나</div>
                        </div>
                        <div className="Slider-DE-Body-Description">
                            피그마를 한 번도 사용해 본 적이 없어서 잘 해낼 수<br />
                            있을까 걱정을 많이 했었지만, 처음부터 차근차근<br />
                            잘 알려주셔서 쉽게 배울 수 있었어요. <br />
                            여러 활동들도 하면서 팀 프로젝트 경험을 할 수 있다는<br />
                            게 가장 좋았어요!
                        </div>
                    </div>
                    <div className="Slider-DE-Body-2">
                        <div className="Slider-DE-Body-Title">
                            <div className="Slider-DE-Body-Title-Content-1">든든한 인생 서포터</div>
                            <div className="Slider-DE-Body-Title-Name">현O진</div>
                        </div>
                        <div className="Slider-DE-Body-Description">
                            대학교 입학 후, 꿈을 향해 오직 스스로의 힘만으로<br />
                            나아가야 한다는 생각에 막막했었는데, 멋쟁이사자처럼<br />
                            에 들어와 피그마와 디자인, 그리고 협업에 대해 하나씩<br />
                            배우고 아이디어톤, 해커톤과 같은 대회도 참가해보며<br />
                            조금 더 수월하게 꿈을 향해 한 발짝씩 다가갈 수 있게 <br />
                            되었어요.
                        </div>
                    </div>
                </div>

                <div className="TrackSlider">
                    <div className="Slider-FE">
                        <img src={BlueLion} className="lion-logo" />
                        프론트엔드
                    </div>

                    <div className="Slider-FE-Body">
                        <div className="Slider-FE-Body-Title">
                            <div className="Slider-DE-Body-Title-Content-2">멋사 더 빨리 들어갈 걸</div>
                            <div className="Slider-FE-Body-Title-Name">심O영</div>
                        </div>
                        <div className="Slider-FE-Body-Description">
                            언어만 조금 다룰 줄 아는 상태로 들어가서<br />
                            걱정했지만 열심히 했더니 13기 모집 페이지까지<br />
                            만들 수 있는 실력을 갖추게 되었습니다.<br />
                            또한 멋사를 통해 여러 대회에 참여할 기회가 있었고<br />
                            열심히 참여했더니 많은 것을 얻어갈 수 있었습니다!
                        </div>
                    </div>
                    <div className="Slider-FE-Body-2">
                        <div className="Slider-FE-Body-Title">
                            <div className="Slider-DE-Body-Title-Content-2">멋사는 하는게 이득!</div>
                            <div className="Slider-FE-Body-Title-Name">장O익</div>
                        </div>
                        <div className="Slider-FE-Body-Description">
                            언어만 조금 다룰 줄 아는 상태로 들어가서<br />
                            걱정했지만 열심히 했더니 13기 모집 페이지까지<br />
                            만들 수 있는 실력을 갖추게 되었습니다.<br />
                            또한 멋사를 통해 여러 대회에 참여할 기회가 있었고<br />
                            열심히 참여했더니 많은 것을 얻어갈 수 있었습니다!
                        </div>
                    </div>



                </div>

                <div className="TrackSlider">
                    <div className="Slider-BE" >
                        <img src={YellowLion} className="lion-logo" />
                        백엔드
                    </div>
                    <div className="Slider-BE-Body">
                        <div className="Slider-BE-Body-Title">
                            <div className="Slider-BE-Body-Title-Content-3">모두가 알았으면 하는 멋사</div>
                            <div className="Slider-BE-Body-Title-Name">권O진</div>
                        </div>
                        <div className="Slider-BE-Body-Description">
                            멋쟁이사자처럼 12기와 함께한 2024년은 저에게 있어<br />
                            값진 성장의 시간이었습니다. 다가오는 2025년에는<br />
                            13기 아기사자 여러분과 함께 더욱 발전하고<br />
                            성장할 수 있는 뜻깊은 기회가 되기를 기대합니다.
                        </div>
                    </div>
                    <div className="Slider-BE-Body-2">
                        <div className="Slider-BE-Body-Title">
                            <div className="Slider-BE-Body-Title-Content-3">개발 자신감을 지탱하는 디딤돌</div>
                            <div className="Slider-BE-Body-Title-Name">김O현</div>
                        </div>
                        <div className="Slider-BE-Body-Description">
                            멋쟁이사자처럼에서의 경험은 단순한 기술 습득 이상의<br />
                            의미가 있었어요. 웹 개발의 핵심인 MVC 패턴을 통해<br />
                            프론트엔드와 백엔드가 어떻게 유기적으로 소통하는지 <br />
                            배웠고, CRUD 기능을 구현해볼 수 있게 되었습니다.<br />
                            멋사에서의 경험을 발판으로,  얻은 지식과 열정을 앞으 <br />
                            로의 개발자 생활에서 마음껏 펼쳐나가고 싶습니다.
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );

};

export default ReviewSlide;