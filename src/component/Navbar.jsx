import '../navstyle.scss';
import { AiOutlinePlus } from "react-icons/ai";
import { PiGlobeSimpleLight } from "react-icons/pi";

function NavBar() {
    

    return (
        <div id="header">
            <a href="#"><img src="././img/logo.svg" alt="" /></a>
            <div className="gnb">
                <ul>
                    <li><a href=""><h3 className='title'>그룹소개</h3></a>
                        <div className="depth2">
                            <ul className='sub'>
                                <li><a href="">하나금융그룹 소개</a>
                                    <ul>
                                        <li><a href="">하나금융그룹</a></li>
                                        <li><a href="">CEO 소개</a></li>
                                        <li><a href="">CI&하나서체</a></li>
                                        <li><a href="">비전과 미션</a></li>
                                        <li><a href="">핵심가치</a></li>
                                        <li><a href="">하나금융그룹 캐릭터</a></li>
                                        <li><a href="">하나인의 정직</a></li>
                                        <li><a href="">연혁</a></li>
                                        <li><a href="">행복한 금융</a></li>
                                        <li><a href="">하나드림타운 소개</a></li>
                                    </ul>
                                </li>
                                <li><a href="">윤리경영</a>
                                    <ul>
                                        <li><a href="">윤리현장</a></li>
                                        <li><a href="">윤리강령</a></li>
                                        <li><a href="">인권경영</a></li>
                                        <li><a href="">반부패 방침</a></li>
                                        <li><a href="">건강한 소리</a></li>
                                        <li><a href="">준법 및 부패방지경영시스템</a></li>
                                        <li><a href="">협력업체 청렴·윤리 실천서약 제도</a></li>
                                    </ul>
                                </li>
                                <li><a href="">금융네트워크</a>
                                    <ul>
                                        <li><a href="">글로벌 네트워크</a></li>
                                        <li><a href="">하나네트워크</a></li>
                                    </ul>
                                </li>
                                <li><a href="">인재/채용</a>
                                    <ul>
                                        <li><a href="">인재상</a></li>
                                        <li><a href="">교육제도</a></li>
                                        <li><a href="">채용정보</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href=""><h3 className='title'>기업지배구조</h3></a></li>
                    <li><a href=""><h3 className='title'>ESG경영</h3></a></li>
                    <li><a href=""><h3 className='title'>투자정보</h3></a></li>
                    <li><a href=""><h3 className='title'>PR센터</h3></a></li>
                </ul>
            </div>
            <div className="right df">
                <a href=""><h1><AiOutlinePlus /></h1></a>
                <a href=""><h1><img src="././img/btn-network.svg" alt="" /></h1></a>
                <a href="" className='global'><h1><PiGlobeSimpleLight /></h1></a>
                <div className='boxWrap'>
                    <div class="bar start"></div>
                    <div class="bar middle"></div>
                    <div class="bar end"></div>
                </div>
            </div>
            <div id='scrollProgressBar'>
                <div></div>
            </div>
        </div>
    )
}

export default NavBar;