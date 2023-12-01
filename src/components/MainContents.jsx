import '../reset.scss'
import '../style.scss'
import '../local.scss'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { TbPlayerPauseFilled } from "react-icons/tb";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import { FaMicrophone } from "react-icons/fa";

function MainContents(){
    return(
        <>
            <div className="mainContent">
                <Swiper
                    slidesPerView={1}
                    navigation={false} modules={[Navigation]} className='mb-5'>
                    <SwiperSlide style={{background:"rgb(14, 140, 141)"}}>
                        <div className="mainWrap">
                            <img className='mainBg' src="./img/mainbg2.png" alt="" />
                        </div>
                        <div className="mainInner">
                            <img className='mainText' src="./img/maintext2.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{background:"rgb(14, 107, 70)"}}>
                        <div className="mainWrap">
                            <img className='mainBg' src="./img/mainbg.jpg" alt="" />
                        </div>
                        <div className="mainInner">
                            <img className='mainText' src="./img/maintext.png" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="slider">
                    <div className="control">
                        <button className="btnSlider">
                            <TbPlayerPauseFilled style={{color:"white"}} />
                        </button>
                        <div className="prevSlider">
                            <GrFormPrevious style={{color:"white"}} />
                        </div>
                        <div className="pageSlider">
                            <span className="pageNum">1</span>
                            /
                            <span className="pageTotalNum">2</span>
                        </div>
                        <div className="nextSlider">
                            <GrFormNext style={{color:"white"}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cardMain">
                <div className="cardList">
                    <section className='noticeCard'>
                        <div className='innerMain'>
                            <div className='innerWrapTop'>
                                <p className='title'>하나금융그룹 소셜미디어 연간대행사 선정 입찰공고</p>
                                <p className='comment'>2024년 하나금융그룹 소셜미디어 연간대행사 선정을 위해 다음과 같이 공고합니다.</p>
                                <a className='noticeDetail' href="#">자세히 보기</a>
                            </div>
                        </div>
                    </section>
                    <section className='groupCard'>
                        <div className="cardWrap">
                            <ul className='topCard'>
                                <li id='hana'>
                                    <div className="innerHead">
                                        <a href="#">하나금융그룹</a><GrFormNext />
                                    </div>
                                    <div className="innerBody">
                                        <p className="title">
                                            함께 성장하며 <br/>
                                            행복을 나누는 금융
                                        </p>
                                        <p className="text">
                                            직원, 손님, 사회 모두가 행복한 <br/>
                                            금융회사로 성장해갑니다
                                        </p>
                                    </div>
                                </li>
                                <li id='global'>
                                    <div className="innerHead">
                                        <a href="#">글로벌 네트워크</a><GrFormNext />
                                    </div>
                                    <div className="innerBody">
                                        <p className="title">
                                            전 세계 25개 지역 <br/>
                                            211개의 네트워크
                                        </p>
                                        <p className="text">
                                            국내 최대의 글로벌 네트워크를 통해 <br/>
                                            세계적인 금융그룹으로 도약합니다
                                        </p>
                                    </div>
                                </li>
                                <li id='chart'>
                                    <div className="innerHead">
                                        <a href="#">주가 정보</a><GrFormNext />
                                    </div>
                                    <div className="innerBody">
                                        <p className="sub">하나금융지주(086790)</p>
                                        <p className="price">
                                            <strong>41,250</strong>
                                             KRW
                                        </p>
                                        <p className="info">
                                            전일대비
                                            <span className="upDown">200원 (0.48%)</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className='reportCard'>
                        <div className="cardWrapReport">
                            <div className="innerWrap">
                                <div className="leftCards">
                                    <div className="innerReportCard" id='esg'>
                                        <div className="reportHead"><a href="#">ESG REPORT</a></div>
                                        <div className="reportBody">
                                            <p>2022년<br/>
                                                지속가능경영보고서
                                            </p>
                                            <div>
                                                <a className='reportPdf' href="#">PDF(국문)<HiDownload /></a>
                                                <a className='reportPdf' href="#">PDF(영문)<HiDownload /></a>
                                            </div>
                                            <img src="./img/reportfirst.jpg" alt="" className='reportImg' />
                                        </div>
                                    </div>
                                    <div className="innerReportCard" id='annual'>
                                        <div className="reportHead"><a href="#">ANNUAL REPORT</a></div>
                                        <div className="reportBody">
                                            <p>2022년<br/>
                                                연차 보고서
                                            </p>
                                            <div>
                                                <a className='reportPdf' href="#">Annual Report(Full)<HiDownload /></a>
                                                <a className='reportPdf' href="#">Annual Report(Only)<HiDownload /></a>
                                            </div>
                                            <img src="./img/reportsecond.jpg" alt="" className='reportImg' />
                                        </div>
                                    </div>
                                </div>
                                <div className="innerReportCard" id='chartReport'>
                                    <div className="reportHead"><a href="#">경영 실적</a></div>
                                    <div className="reportBody">
                                        <p>2023년<br/>
                                            3분기 경영실적 발표
                                        </p>
                                        <div>
                                            <a className='reportPdf' href="#">PDF<HiDownload /></a>
                                            <a className='reportPdf' href="#">Web Casting<FaMicrophone /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default MainContents