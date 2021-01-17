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
                        <h1><FiUser /> PROFILE</h1>
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
                        </article>
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
