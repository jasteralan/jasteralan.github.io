import { Fragment } from 'react';
import Head from 'next/head';
import { FiLinkedin, FiGithub, FiAward, FiUser, FiBriefcase, FiFeather, FiMail, FiPhone } from 'react-icons/fi';

import styles from '../styles/Resume.module.css'

export default function Resume() {
    return (
        <Fragment>
            <Head>
                <title>Hi, I'm Jaster</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"></link>
            </Head>
    
            <div className={`${styles.container} ${styles.zhhans}`} style={{ backgroundImage : `url(/images/chalkboard.jpg)` }}>
                <div className={styles.resume} style={{ backgroundImage : `url(/images/black-thread-light.png)` }}>
                    <header className={styles.header} style={{ backgroundImage : `url(/images/header_bg.jpeg)` }}>
                        <img className={styles.avatar} src="/images/avatar.png" />
                        <div className={styles.connects}>
                            <a className={styles.linkedin} target="_blank" href="https://www.linkedin.com/in/jaster-chang-24250590/"><FiLinkedin /></a>
                            <a className={styles.github} target="_blank" href="https://github.com/jasteralan/"><FiGithub /></a>
                        </div>
                    </header>
    
                    <section className={`${styles.sec} ${styles.profile}`}>
                        <h1><FiUser /> Profile</h1>
                        <article>
                            <p>嗨，我是 Jaster，3年前端、4年全端的工程師 </p>
                            <p>於 3 間新創團隊工作過，對於敏捷開發與打造最小可行產品有所經驗；團隊運作模式多為 Scrum，也曾與 PM 合作共同導入看板方法進行開發。</p>
                            <p>對於開發技術頗有熱情，平常會利用時間跟上最新前端新知。致力於開發直覺好用、手機友善的網頁應用，目前是以 React 為主；後端的經驗幫助我在介接 API 時更順暢，部署維運方面傾向容器化包裝與自動化部屬。</p>

                            <div className={styles.tags}>
                                <span>#HTML5</span>
                                <span>#CSS3(SCSS)</span>
                                <span>#JavaScript(ES6)</span>
                                <span>#React</span>
                                <span>#Redux</span>
                                <span>#XState</span>
                                <span>#NextJS</span>
                                <span>#Webpack</span>
                                <span>#Docker</span>
                                <span>#Jenkins</span>
                                <span>#PHP7</span>
                                <span>#Laravel</span>
                                <span>#MySQL</span>
                                <span>#JIRA</span>
                            </div>

                            <div className={styles.contactme}>
                                <span><FiMail/> jaster1019@gmail.com</span>
                                <span><FiPhone/> (+886) 921-240-064</span>
                            </div>
                        </article>
                    </section>

                    <section className={`${styles.sec} ${styles.experience}`}>
                        <h1><FiBriefcase /> EXPERIENCE</h1>
                        <ul>
                            <li>
                                <div className={styles.position}>
                                    <div>Sr. Front-end Engineer</div>
                                    <div className={styles.company}>
                                        捷思遊戲科技有限公司
                                        <span className={styles.duration}>2018 – 2020</span>
                                    </div>
                                </div>

                                <div className={styles.desc}>
                                    <p>公司以 Agile 運行，團隊以 Scrum 開發維護商業後台，供公司人員與合作夥伴進行管理及設定查詢。</p>
                                    <p>根據設計師的 Wireframe，獨立建置 20+ 宣傳活動網站，包含前台網頁、營運後台與 API 設計、DB Schema 規劃。活動期間增加 ~10% 的活躍人數成長。</p>

                                    <ul className={styles.skill}>
                                        <li><FiFeather /> HTML5, CSS3(SCSS), Javascript(ES6), React, Webpack</li>
                                        <li><FiFeather /> React-Spring (Animation), Redux / XState (State Management)</li>
                                        <li><FiFeather /> Jenkins, Docker, JIRA</li>
                                    </ul>
                                </div>


                            </li>
                            <li>
                                <div className={styles.position}>
                                    <div>Full-stack Engineer</div>
                                    <div className={styles.company}>
                                        優愛德股份有限公司
                                        <span className={styles.duration}>2015 – 2017</span>
                                    </div>
                                </div>
                                <div className={styles.desc}>
                                    <p>1. ERP 專案管理與開發維運：公司內部營運系統，處理業務、媒體、財務端的業務流程。</p>
                                    <p>2. 廣告分析平台開發：整體開發團隊規模約 10 人，分為應用端、基礎建設端與資料端，採用 Scrum 加上看板方法的團隊合作模式。</p>
                                    
                                    <ul className={styles.skill}>
                                        <li><FiFeather /> Front-end: HTML5, CSS3, Javascript, ES6, Vue, Webpack</li>
                                        <li><FiFeather /> Back-end / CI / CD: PHP7, Laravel, MySQL, Nginx</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className={styles.position}>
                                    <div>Full-stack Engineer</div>
                                    <div className={styles.company}>
                                        赫椎股份有限公司
                                        <span className={styles.duration}>2014 – 2015</span>
                                    </div>
                                </div>
                                <div className={styles.desc}>
                                    <p>HWTrek 是硬體端與軟體端的媒合平台，並且有諮詢團隊協助兩端媒合。曾經也嘗試如Indegogo 的募資模式</p>
                                    <p>以 Scrum 進行團隊合作，開發後端 API 與前端網站</p>

                                    <ul className={styles.skill}>
                                        <li><FiFeather /> Front-end: HTML5, CSS3, Javascript, React, Redux, Grunt</li>
                                        <li><FiFeather /> Back-end / CI / CD: PHP7, MySQL, Jenkins, AWS</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className={styles.position}>
                                    <div>Jr. Full-stack Engineer</div>
                                    <div className={styles.company}>
                                        銀河互動網路股份有限公司
                                        <span className={styles.duration}>2012 – 2013</span>
                                    </div>
                                </div>
                                <div className={styles.desc}>
                                    <p>與 UI 設計師合作，重建一個已 5 年未更新的網站：iTry — 一個試用品發送平台</p>
                                    <p>維護更新後台功能與 API 設計開發</p>
                                    <ul className={styles.skill}>
                                        <li><FiFeather /> Front-end: HTML5, CSS3, Javascript, Jquery</li>
                                        <li><FiFeather /> Back-end: PHP, MySQL</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className={`${styles.sec} ${styles.edu}`}>
                        <h1><FiAward /> EDUCATION</h1>
                        <p className={styles.edu_school}>國立成功大學 資訊工程學系</p>
                        <p className={styles.edu_duration}>2006-2010</p>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
