import '../substyle.scss';
import '../reset.scss';
import { FaArrowRightLong } from "react-icons/fa6";
import { LuArrowDownToLine } from "react-icons/lu";

function SubContent() {
    

    return (
        <>
        <section className="news">
            <div className="container inner">
                <div className="news_title">
                    <h1 className='title'>하나소식</h1>
                    <a href="">More<FaArrowRightLong className='icon' /></a>
                </div>
                <div className="news_content">
                    <a href="">
                        <div className="article">
                            <div className="news_img">
                                <img src="././img/news1.jpg" alt="" />
                            </div>
                            <div className='badge'><span>하나뉴스</span></div>
                            <p>하나캐피탈, 토스페이먼츠와 공급망 금융 및 전자결제 활성화를 위한 업무협약 체결</p>
                            <p className="date">2023.11.24</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="article">
                            <div className="news_img">
                                <img src="././img/news2.jpg" alt="" />
                            </div>
                            <div className='badge'><span>하나뉴스</span></div>
                            <p>하나캐피탈, 토스페이먼츠와 공급망 금융 및 전자결제 활성화를 위한 업무협약 체결</p>
                            <p className="date">2023.11.24</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="article">
                            <div className="news_img">
                                <img src="././img/news1.jpg" alt="" />
                            </div>
                            <div className='badge'><span>하나뉴스</span></div>
                            <p>하나캐피탈, 토스페이먼츠와 공급망 금융 및 전자결제 활성화를 위한 업무협약 체결</p>
                            <p className="date">2023.11.24</p>
                        </div>
                    </a>
                    <a href="">
                        <div className="article">
                            <div className="news_img">
                                <img src="././img/news2.jpg" alt="" />
                            </div>
                            <div className='badge'><span>하나뉴스</span></div>
                            <p>하나캐피탈, 토스페이먼츠와 공급망 금융 및 전자결제 활성화를 위한 업무협약 체결</p>
                            <p className="date">2023.11.24</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section className="notice">
            <div className="container inner">
                <div className="announce">
                    <div className="announce_company">
                        <div className="announce_title">
                            <h1 className='title'>기업공시</h1>
                            <a href="">More<FaArrowRightLong className='icon' /></a>
                        </div>
                        <div className="announce_content">
                            <div className='list'>
                                <a href="">
                                    <p>기업설명회(IR)개최(안내공시)</p>
                                </a>
                                <p className="date">2023.11.28</p>
                            </div>
                            <div className='list'>
                                <a href="">
                                    <p>주요사항보고서(상각형조건부자본증권발행결정)</p>
                                </a>
                                <p className="date">2023.11.28</p>
                            </div>
                            <div className='list'>
                                <a href="">
                                    <p>기업설명회(IR)개최(안내공시)</p>
                                </a>
                                <p className="date">2023.11.28</p>
                            </div>
                        </div>
                    </div>
                    <div className="announce_manegement">
                        <div className="announce_title">
                            <h1 className='title'>경영공시</h1>
                            <a href="">More<FaArrowRightLong className='icon' /></a>
                        </div>
                        <div className="manegement_list">
                            <div className='line'>
                                <p className="listTitle">
                                    2023년 3분기 <br />
                                    하나금융지주회사 현황
                                </p>
                                <a href="" className='downlink'>
                                    <p>PDF </p><LuArrowDownToLine className='dwicon'/>
                                </a>
                            </div>
                            <div className='line'>
                                <p className="listTitle">
                                    2023년 2분기 <br />
                                    하나금융지주회사 현황
                                </p>
                                <a href="" className='downlink'>
                                    <p>PDF </p><LuArrowDownToLine className='dwicon'/>
                                </a>
                            </div>
                            <div className='line'>
                                <p className="listTitle">
                                    2023년 1분기 <br />
                                    하나금융지주회사 현황
                                </p>
                                <a href="" className='downlink'>
                                    <p>PDF </p><LuArrowDownToLine className='dwicon'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default SubContent;