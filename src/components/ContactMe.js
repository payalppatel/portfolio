import React from 'react';
import styles from './styles/contactme.module.css';
import {Link} from 'react-router-dom';
import ContactmeGirl from './assets/contactmeGirl.svg';



export default function ContactMe(){
    return(
        <div className={styles.container}>
            <img src={ContactmeGirl} alt="contactMe" className={styles.contactmeGirl}/>

            <div className={styles.contactContent}>
                <div className={styles.contactTitle}>Contact
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.contactLinks}></div>
            </div> 
        </div>
    )
}