import "./AskLink.css"
import kakaoImg from "../images/kakao.png"
import instaImg from "../images/insta.png"

export default function AskLinkPage(){
    return(
        <div className="asklink-container">
            <a href="https://pf.kakao.com/_DfxbkK" target="_blank" rel="noopener noreferrer" className="kakaotalkLink">
                <div className="kakaoImg">
                    <img src={kakaoImg} alt="kakaotalk-img" />
                </div>
                <div className="kakao-text">카카오톡 채널 멋쟁이사자처럼 삼육대학교</div>
            </a>
            <a href="https://www.instagram.com/likelion_syu/" target="_blank" rel="noopener noreferrer" className="instagramLink">
                <div className="instaImg">
                    <img src={instaImg} alt="insta-img" />
                </div>
                <div className="insta-text">인스타그램 멋쟁이사자처럼 at 삼육대학교</div>
            </a>
        </div>
    )
}