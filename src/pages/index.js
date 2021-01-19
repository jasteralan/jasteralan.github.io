import { Fragment } from 'react';
import Head from 'next/head';
import { FiAward, FiUser, FiFeather, FiTwitch, FiGlobe } from 'react-icons/fi';

import styles from '../styles/Resume.module.css';
import Experience from '../components/Experience';
import Header, { PrintHeader } from '../components/Header';

export default function Resume() {
    return (
        <Fragment>
            <Head>
                <title>Hi, I'm Jaster</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"></link>
            </Head>
    
            <div className={styles.container} style={{ backgroundImage : `url(/images/chalkboard.jpg)` }}>
                <div className={styles.resume} style={{ backgroundImage : `url(/images/black-thread-light.png)` }}>
                    <Header hideOnPrint={true} />
                    <PrintHeader />
    
                    <section className={`${styles.profile}`}>
                        <article>
                            <p>
                                7 years experience (3 years as front-end, 4 years as full-stack) engineer with extensive experience in 
                                development on JavaScript (mostly React), mobile UX optimization, and single page application. 
                                Always have willing to learn new things, exploring new technologies.
                            </p>
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

                    <Experience />

                    <section className={`${styles.edu}`}>
                        <h1><FiAward /> EDUCATION</h1>
                        <p className={styles.edu_school}>Bachelor of Computer Science and Information Engineering</p>
                        <p className={styles.edu_department}>National Cheng Kung University</p>
                        <p className={styles.edu_duration}>Taiwan, 2006-2010</p>
                    </section>


                    <section className={`${styles.language}`}>
                        <h1><FiTwitch /> LANGUAGE</h1>
                        <ul>
                            <li>Chinese</li>
                            <li>English</li>
                            <li>Japanese</li>
                        </ul>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
