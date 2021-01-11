import { Fragment } from 'react';
import Head from 'next/head';
import { FiLinkedin, FiGithub, FiAward, FiUser, FiBriefcase, FiFeather } from 'react-icons/fi';

import styles from '../styles/Resume.module.css'

export default function Resume() {
    return (
        <Fragment>
            <Head>
                <title>Hi, I'm Jaster</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"></link>
            </Head>
    
            <div className={styles.container} style={{ backgroundImage : `url(/images/chalkboard.jpg)` }}>
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
                            <p>I’m a front-end engineer with experience in developing ease of use, mobile-optimized, and secure web applications. My back-end experiences make me can better integrate API into apps.</p>
                            <p>I’m highly-motivated with a strong dedication to cutting edge technologies and oriented to developing innovative and stable solutions.</p>
                            <p>With experience in startup companies, I’m familiar with building minimum viable products and doing rapid iteration to help business grow fast.</p>
                            
                            <div className={styles.tags}>
                                <span>#HTML5</span>
                                <span>#CSS3(SCSS)</span>
                                <span>#JavaScript(ES6)</span>
                                <span>#React</span>
                                <span>#Redux</span>
                                <span>#XState</span>
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

                                <div className={styles.desc}>
                                    <p>As a front-end engineer, I work with designer to build promotion SPAs. Also we use data analysis to improve event performance, as a result, we bring 10% increase of players.</p>
                                    <p>I use React to create component-base UI; Webpack to bundle and optimize assets; Use Docker to manage websites and Nginx as proxy server.</p>
                                    <p>I also involve in design Restful API and MySQL Schema.</p>
                                    <p>We run scrum across Taipei, Vegas, Vancouver, mostly speak in English and Chinese.</p>
                                </div>

                                <ul className={styles.skill}>
                                    <li><FiFeather /> HTML5, CSS3(SCSS), Javascript(ES6), React, Webpack</li>
                                    <li><FiFeather /> React-Spring (Animation), Redux / XState (State Management)</li>
                                    <li><FiFeather /> Jenkins, Docker, JIRA</li>
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
                                <div className={styles.desc}>
                                    In UrAD, we use kanban for product management. 
                                    I lead 3 members to work with data analysis team and infrastructure team to build digital advertising management platform.
                                </div>
                                <ul className={styles.skill}>
                                    <li><FiFeather /> Front-end: HTML5, CSS3, Javascript, ES6, Vue, Webpack</li>
                                    <li><FiFeather /> Back-end / CI / CD: PHP7, Laravel, MySQL, Nginx</li>
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
                                <div className={styles.desc}>
                                    <p>Participate in an agile startup to build HWTrek – an collaborative platform for hardware innovation.</p>
                                    <p>HWTrek match startup and hardware maker to speed up from idea to product.</p>
                                </div>
                                <ul className={styles.skill}>
                                    <li><FiFeather /> Front-end: HTML5, CSS3, Javascript, React, Redux, Grunt</li>
                                    <li><FiFeather /> Back-end / CI / CD: PHP7, MySQL, Jenkins</li>
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
                                <div className={styles.desc}>
                                    <p>Cooperate with UI Designer to recreate a 5-yrs old website: iTry – a service to send out free product samples to do WMR (Word Of Mouth marketing)</p>
                                </div>
                                <ul className={styles.skill}>
                                    <li><FiFeather /> Front-end: HTML5, CSS3, Javascript, Jquery</li>
                                    <li><FiFeather /> Back-end: PHP, MySQL</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section className={`${styles.sec} ${styles.edu}`}>
                        <h1><FiAward /> EDUCATION</h1>
                        <p className={styles.edu_school}>Computer Science and Information Engineering</p>
                        <p className={styles.edu_department}>National Cheng Kung University / Taiwan</p>
                        <p className={styles.edu_duration}>2006-2010</p>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
