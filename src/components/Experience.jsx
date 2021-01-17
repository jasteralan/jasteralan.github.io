import { FiBriefcase, FiFeather } from 'react-icons/fi';

import resumeStyles from '../styles/Resume.module.css';
import styles from '../styles/Experience.module.css';

export default function Experience() {

    return (
        <section className={`${styles.sec} ${styles.experience}`}>
            <h1><FiBriefcase /> EXPERIENCE</h1>
            <ul>
                <li>
                    <div className={styles.position}>
                        <div>Sr. Front-end Engineer</div>
                        <div className={styles.company}>
                            Genesis Gaming
                            <span className={styles.duration}>2018 – 2020</span>
                        </div>
                    </div>

                    <ul className={styles.points}>
                        <li>Gained active users by 20% by implementing more than 20 promotion SPAs.</li>
                        <li>Refined CI flow by using Docker for containerization, and Jenkins for automate deployment.</li>
                        <li>Participated in scrum teams across Taipei, Vegas, Vancouver offices, implementing widgets used in HTML5 games.</li>
                        <li>Skills : HTML5, CSS3(SCSS), Javascript(ES6), React, Redux / XState (State Management), React-Spring (Animation), Webpack, Docker, Jenkins</li>
                    </ul>
                </li>

                <li>
                    <div className={styles.position}>
                        <div>Full-stack Engineer</div>
                        <div className={styles.company}>
                            UrAD
                            <span className={styles.duration}>2015 – 2017</span>
                        </div>
                    </div>
                    <ul className={styles.points}>
                        <li>Developed a management sysment for work assignment and finance report generation, decreasing redundent cost on digital advertising.</li>
                        <li>Introduced scrum and kanban to improve teamwork.</li>
                        <li>Skills : HTML5, CSS3, Javascript(ES6), Vue, Webpack, PHP7, Laravel, Mysql, Nginx</li>
                    </ul>    
                </li>

                <li>
                    <div className={styles.position}>
                        <div>Full-stack Engineer</div>
                        <div className={styles.company}>
                            HWTrek
                            <span className={styles.duration}>2014 – 2015</span>
                        </div>
                    </div>
                    <ul className={styles.points}>
                        <li>Developed HWTrek – an collaborative platform for hardware innovation, helping start up to boost from idea to the implementation.</li>
                        <li>Engaged in a scrum team to plan the HWTrek MVP.</li>
                        <li>Skills : HTML5, CSS3, Javascript, React, Redux, Grunt, PHP7, Mysql, Jenkins, AWS</li>
                    </ul>
                </li>

                <li className={resumeStyles.hide_on_print_}>
                    <div className={styles.position}>
                        <div>Jr. Full-stack Engineer</div>
                        <div className={styles.company}>
                            iwant
                            <span className={styles.duration}>2012 – 2013</span>
                        </div>
                    </div>
                    <ul className={styles.points}>
                        <li>Cooperated with designer to recreate – iTry (a website to send out free product samples).</li>
                        <li>Revamped iTry CMS and API to increase efficiency of publishing new roduct samples.</li>
                        <li>Skills : HTML5, CSS3, Javascript, Jquery, PHP, Mysql</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export function ExperienceZHhans() {
    return (
            <section className={`${styles.experience}`}>
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
                        <p>根據設計師的 Wireframe，獨立建置 20+ 宣傳活動網站，包含前台網頁、營運後台與 API 設計、DB Schema 規劃。活動期間增加 ~20% 的活躍人數成長。</p>

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
    )
}