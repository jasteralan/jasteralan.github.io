import { Fragment } from 'react';
import Head from 'next/head';
import { FiLinkedin, FiGithub, FiAward, FiUser, FiBriefcase, FiFeather, FiMail, FiPhone } from 'react-icons/fi';

import styles from '../styles/Resume.module.css'
import Header from '../components/Header';
import { ExperienceZHhans } from '../components/Experience';

export default function Resume() {
    return (
        <Fragment>
            <Head>
                <title>Hi, I'm Jaster</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"></link>
            </Head>
    
            <div className={`${styles.container} ${styles.zhhans}`} style={{ backgroundImage : `url(/images/chalkboard.jpg)` }}>
                <div className={styles.resume} style={{ backgroundImage : `url(/images/black-thread-light.png)` }}>

                    <Header />
    
                    <section className={`${styles.sec} ${styles.profile}`}>
                        <article>
                            <p>嗨，我是 Jaster，3年前端、4年的全端經驗</p>

                            <p>作為前端工程師，致力於開發直覺好用且手機友善的應用，優化介面與載入速度，並持續優化部署流程。</p>
                            <p>對於敏捷開發的運作熟悉；在前 3 間新創團隊中，對打造與規劃最小可行產品有所經驗。</p>
                            <p>對於開發有興趣與熱情，總是願意嘗試新的技術與領域。</p>
                        </article>
                    </section>

                    <section className={`${styles.skills}`}>
                        <h1><FiFeather /> SKILLS</h1>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SCSS (CSS pre-processor)</li>
                            <li>JavaScript (ES6)</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Xstate</li>
                            <li>Webpack</li>
                            <li>Docker</li>
                            <li>Jenkins</li>
                            <li>PHP7 (Laravel)</li>
                        </ul>
                    </section>

                    <ExperienceZHhans />

                    <section className={`${styles.sec} ${styles.edu}`}>
                        <h1><FiAward /> EDUCATION</h1>
                        <p className={styles.edu_school}>國立成功大學 資訊工程學系 學士畢</p>
                        <p className={styles.edu_duration}>2006-2010</p>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
