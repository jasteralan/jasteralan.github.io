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
                        <li>Gained active users by 20% by implementing 20 event pages (SPA).</li>
                        <li>Participated in Scrum teams across Taipei, Vegas, and Vancouver, implementing widgets used in HTML5 games by Preact.</li>
                        <li>Optimized performance by taking mobile-first design, using React Hook to reduce rerendering, configuring Webpack to do lazy-loading and chunk JS files.</li>
                        <li>Refined CI flow by Docker and Jenkins.</li>
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
                        <li>Developed a management system for work assignment and finance report generation, decreasing redundant costs on digital advertising.</li>
                        <li>Introduced Scrum and Kanban to improve teamwork.</li>
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
                        <li>Engaged in a Scrum team to develop HWTrek – a collaborative platform for hardware innovation, helping start-ups to boost from idea to implementation.</li>
                        <li>Refactored HWTrek front-end site from JQuery to React, with Grunt(building tool) and Jenkins to do continuous deployment.</li>
                        <li>Skills: HTML5, CSS3, Javascript, React, Redux, Grunt, PHP7, Mysql, Jenkins, AWS</li>
                    </ul>
                </li>

                <li>
                    <div className={styles.position}>
                        <div>Jr. Full-stack Engineer</div>
                        <div className={styles.company}>
                            iwant
                            <span className={styles.duration}>2012 – 2013</span>
                        </div>
                    </div>
                    <ul className={styles.points}>
                        <li>Cooperated with a designer to recreate – iTry (a website to send out free product samples).</li>
                        <li>Revamped iTry CMS and API to increase the efficiency of publishing new product samples.</li>
                        <li>Skills : HTML5, CSS3, Javascript, Jquery, PHP, Mysql</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export function ExperienceZHhans() {
    return (
            <section className={`${styles.experience} ${styles.zhhans}`}>
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
                    <ul className={styles.points}>
                        <li>參與敏捷開發團隊，以 Preact 開發 HTML5 遊戲 Wiget，優化整理運作效能</li>
                        <li>開發維護商業後台，以 React Hook 重構老舊程式碼，升級建構工具 Webpack 並以容器化與自動化方式部署</li>
                        <li>建置超過 20 個宣傳活動。包含互動性高、手機優化的 React 活動網站，營運後台與 API 設計，DB Schema 規劃。增加 2 成的活躍人數成長</li>
                        <li className={styles.skill}>HTML5, CSS3(SCSS), Javascript(ES6), React, Webpack</li>
                        <li className={styles.skill}>Redux / XState (State Management), React-Spring (Animation), Jenkins, Docker, JIRA</li>
                    </ul>
                </li>

                <li>
                    <div className={styles.position}>
                        <div>Full-stack Engineer</div>
                        <div className={styles.company}>
                            優愛德股份有限公司
                            <span className={styles.duration}>2015 – 2017</span>
                        </div>
                    </div>
                    <ul className={styles.points}>
                        <li>內部營運系統的前後端開發，以 TDD 建置後端 API</li>
                        <li>導入敏捷開發與看板方法，開發廣告分析平台 MVP</li>
                        <li className={styles.skill}>Front-end: HTML5, CSS3, Javascript, ES6, Vue, Webpack</li>
                        <li className={styles.skill}>Back-end / CI / CD: PHP7, Laravel, MySQL, Nginx</li>
                    </ul>
                </li>

                <li>
                    <div className={styles.position}>
                        <div>Full-stack Engineer</div>
                        <div className={styles.company}>
                            赫椎股份有限公司
                            <span className={styles.duration}>2014 – 2015</span>
                        </div>
                    </div>
                    <ul className={styles.points}>
                        <li>參與敏捷開發方式團隊，開發硬體端與軟體端的媒合平台 – HWTrek</li>
                        <li>以 React 開發前端網站，Laravel 建置後端 API</li>
                        <li className={styles.skill}>Front-end: HTML5, CSS3, Javascript, React, Redux, Grunt</li>
                        <li className={styles.skill}>Back-end / CI / CD: PHP7, Laravel, MySQL, Jenkins, AWS</li>
                    </ul>
                </li>

                <li>
                    <div className={styles.position}>
                        <div>Jr. Full-stack Engineer</div>
                        <div className={styles.company}>
                            銀河互動網路股份有限公司
                            <span className={styles.duration}>2012 – 2013</span>
                        </div>
                    </div>
                    <ul className={styles.points}>
                        <li>與 UI 設計師合作，重建試用品發送平台 – iTry</li>
                        <li>維護更新 CMS 後台與 API 設計開發</li>
                        <li className={styles.skill}>HTML5, CSS3, Javascript, Jquery, PHP, MySQL</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}