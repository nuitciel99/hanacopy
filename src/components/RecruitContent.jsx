import '../reset.scss'
import '../style.scss'
import '../local.scss'
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

function RecruitContent(){
    return(
        <div>
            <section className="recruit">
                    <div className="inner">
                        <div className="wrap">
                            <p>
                                변화를 주도하는<br/>
                                글로벌 인재를 기다립니다
                            </p>
                            <div className="btnWrap">
                                <a className="innerBtn" href='#'>
                                    인재상
                                    <span>&nbsp;알아보기</span><FaArrowRight />
                                </a>
                                <a className="innerBtn dark" href='#'>
                                    채용공고
                                    <span>&nbsp;바로가기</span><FaArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default RecruitContent