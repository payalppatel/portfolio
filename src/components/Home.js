import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles/home.module.css';
import emoji from './assets/emoji.png';
import GirlwithCircle from './assets/GirlwithCircle.svg';

export default function Home(){
    return(
        <div className={styles.container}>
            <img src={GirlwithCircle} alt="girlwithcircle" className={styles.homeGirl} />

            <div className={styles.links}>
                <div className={styles.linkGroup}>
                    <Link  to="/skills" className={styles.linkTitle}>Skills</Link>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.linkGroup}>
                    <Link to="/projects" className={styles.linkTitle}>Projects</Link>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.linkGroupRight}>
                    <a href="/resume.pdf" className={styles.linkTitle}>Resume</a>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.linkGroupRight}>
                    <Link to="/contact" className={styles.linkTitle}>Contact</Link>
                    <div className={styles.underline}></div>
                </div>
            </div>

            <div className={styles.nameHeading}>
                <p>Hello,</p>
                <p>I am Payal Patel<img src={emoji} alt="hi" /></p>
            </div>
        </div>
    )
}