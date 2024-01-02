import { useEffect, useState } from 'react';
import '../navstyle.scss';
import { AiOutlinePlus } from "react-icons/ai";
import { PiGlobeSimpleLight } from "react-icons/pi";

function NavBar() {
    const [isActive, setIsActive] = useState(false)
    function openMenu() {
        setIsActive(!isActive)
    }
    const [scrollPosition, setScrollosition] = useState(0);
    const updateScroll = () => {
        setScrollosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    })

    return (
        <div id='header' className={`header ${scrollPosition < 100 ? 'top' : ''}`}>
            <a href="#"><img src={`${scrollPosition < 100 ? "././img/logo-w.svg" : "././img/logo.svg"}`} alt="" /></a>
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
                    <li><a href=""><h3 className='title'>기업지배구조</h3></a>
                        <div className="depth2">
                            <ul className='sub'>
                                <li><a href="">조직도</a></li>
                                <li><a href="">주주총회</a>
                                    <ul>
                                        <li><a href="">주주구성</a></li>
                                        <li><a href="">주주총회 결과</a></li>
                                        <li><a href="">주주총회 관련 자료</a></li>
                                    </ul>
                                </li>
                                <li><a href="">이사회</a>
                                    <ul>
                                        <li><a href="">이사회구성</a></li>
                                        <li><a href="">주요 활동 내역</a></li>
                                    </ul>
                                </li>
                                <li><a href="">지배구조 관련 내규</a>
                                    <ul>
                                        <li><a href="">정관</a></li>
                                        <li><a href="">지배구조 내부 규범</a></li>
                                        <li><a href="">이사회 규정</a></li>
                                        <li><a href="">사외이사 독립성 기준</a></li>
                                        <li><a href="">이사회 다양성 기준</a></li>
                                    </ul>
                                </li>
                                <li><a href="">경영진</a></li>
                                <li><a href="">지배구조 공시</a></li>
                                <li><a href="">기타</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href=""><h3 className='title'>ESG경영</h3></a>
                        <div className="depth2">
                            <ul className='sub'>
                                <li><a href="">ESG 전략</a></li>
                                <li><a href="">ESG 성과</a></li>
                                <li><a href="">ESG Reporting</a></li>
                                <li><a href="">ESG 자료실</a></li>
                                <li><a href="">사회가치창출활동</a>
                                    <ul>
                                        <li><a href="">하나 파워 온</a></li>
                                        <li><a href="">보육사업</a></li>
                                        <li><a href="">지역사회기여</a></li>
                                        <li><a href="">ESG 소식</a></li>
                                        <li><a href="">재단</a></li>
                                        <li><a href="">봉사단</a></li>
                                        <li><a href="">금융교육</a></li>
                                    </ul>
                                </li>
                                <li><a href="">스포츠</a>
                                    <ul>
                                        <li><a href="">스포츠단</a></li>
                                        <li><a href="">대회/스폰서십</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href=""><h3 className='title'>투자정보</h3></a>
                        <div className="depth2">
                            <ul className='sub'>
                                <li><a href="">Investor Relations</a></li>
                                <li><a href="">공시정보</a>
                                    <ul>
                                        <li><a href="">기업공시</a></li>
                                        <li><a href="">경영공시</a></li>
                                        <li><a href="">재무보고서</a></li>
                                        <li><a href="">재무제표 공고</a></li>
                                    </ul>
                                </li>
                                <li><a href="">재무정보</a>
                                    <ul>
                                        <li><a href="">재무하이라이트</a></li>
                                        <li><a href="">요약재무제표</a></li>
                                        <li><a href="">재무제표</a></li>
                                        <li><a href="">Databook</a></li>
                                    </ul>
                                </li>
                                <li><a href="">IR 정보</a>
                                    <ul>
                                        <li><a href="">IR행사&프레젠테이션</a></li>
                                        <li><a href="">팩트시트</a></li>
                                    </ul>
                                </li>
                                <li><a href="">주가정보</a>
                                    <ul>
                                        <li><a href="">주가그래프</a></li>
                                        <li><a href="">과거 주가검색</a></li>
                                        <li><a href="">배당현황</a></li>
                                    </ul>
                                </li>
                                <li><a href="">Annual Report</a></li>
                                <li><a href="">신용평가등급</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href=""><h3 className='title'>PR센터</h3></a>
                        <div className="depth2">
                            <ul className='sub'>
                                <li><a href="">PR센터</a></li>
                                <li><a href="">하나소식</a>
                                    <ul>
                                        <li><a href="">하나뉴스</a></li>
                                        <li><a href="">하나영상</a></li>
                                        <li><a href="">하나공시</a></li>
                                    </ul>
                                </li>
                                <li><a href="">광고</a>
                                    <ul>
                                        <li><a href="">TVCF</a></li>
                                        <li><a href="">인쇄광고</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="right df">
                <a href=""><h1><AiOutlinePlus /></h1></a>
                <a href=""><h1><img src={`${scrollPosition < 100 ? "././img/btn-network-w.svg" : "././img/btn-network.svg"}`} alt="" /></h1></a>
                <a href="" className='global'><h1><PiGlobeSimpleLight /></h1></a>
                <a href="#!">
                    <div className={`boxWrap ${ isActive ? 'active' : '' }`} onClick={openMenu}>
                        <div class="bar start"></div>
                        <div class="bar middle"></div>
                        <div class="bar end"></div>
                    </div>
                </a>
            </div>
            <div id='scrollProgressBar'>
                <div></div>
            </div>
        </div>
    )
}

export default NavBar;