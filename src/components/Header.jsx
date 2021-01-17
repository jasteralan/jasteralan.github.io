import { FiLinkedin, FiGithub, FiMail, FiPhone, FiGlobe } from 'react-icons/fi';

import resumeStyles from '../styles/Resume.module.css';
import styles from '../styles/Header.module.css';

export default function Header({ hideOnPrint = false }) {

    return (
        <header className={`${styles.header} ${hideOnPrint? resumeStyles.hide_on_print : 0}`} 
                style={{ backgroundImage : `url(/images/header_bg.jpeg)` }}>
            <img className={styles.avatar} src="/images/avatar.png" />
            <div className={styles.connects}>
                <a className={styles.linkedin} target="_blank" href="https://www.linkedin.com/in/jaster-chang-24250590/"><FiLinkedin /></a>
                <a className={styles.github}   target="_blank" href="https://github.com/jasteralan/"><FiGithub /></a>
            </div>
        </header>
    )
}

export function PrintHeader() {
    return (
        <header className={styles.header__print}>
            <div>
                <h1>Jaster</h1>
                <h2>HAO WEN CHANG</h2>
            </div>
            <ul className={styles.contact}>
                <li><FiPhone /> (+886) 921-240064</li>
                <li><FiMail /> jaster1019@gmail.com</li>
                <li><FiGlobe /> Taiwan, Taipei</li>
            </ul>
        </header>
    )
}