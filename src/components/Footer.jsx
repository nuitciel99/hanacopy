import '../reset.scss'
import '../style.scss'
import '../local.scss'
import React from 'react';
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { SiKhanacademy } from "react-icons/si";

function Footer(){
    return(
        <>
            <footer className='footer'>
                <div className="top">
                    <div className="inner">
                        <div className="link">
                            <button className='footerBtn'>이용약관</button>
                            <ol>
                                <li><button className='privacy'>개인정보처리방침</button></li>
                                <li><button className='credit'>신용정보활용체제</button></li>
                                <li><button>고객정보취급방침</button></li>
                                <li><button>하나맵</button></li>
                            </ol>
                        </div>
                        <div className="sns">
                            <a href="#"><CiYoutube /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><TbBrandTiktok /></a>
                            <a href="#"><FiFacebook /></a>
                        </div>
                        <a href="#" className='accessibility'>
                        <img src="./img/accessibility.svg" alt="" className='accessImg'/>
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="inner">
                        <a href="#" className='logoFooter'><h1>하나금융그룹</h1></a>
                        <p>
                            <span>서울특별시 중구 을지로 66</span>
                            <span>02.2002.1110</span>
                        </p>
                        <p>Copyright ⓒ 2022 HANA FINANCIAL GROUP. All rights Reserved.</p>
                    </div>
                </div>
                <a href="#" className='toTop'>
                    <div className="btnToTop"></div>
                </a>
            </footer>
        </>
    )
}

export default Footer