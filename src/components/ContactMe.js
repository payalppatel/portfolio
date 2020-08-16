import React from 'react';
import styles from './styles/contactme.module.css';
import {Link} from 'react-router-dom';
import ContactmeGirl from './assets/contactmeGirl.svg';
import Behance from './assets/behance.svg';
import Facebook from './assets/facebook.svg';
import Github from './assets/github.svg';
import Instagram from './assets/instagram.svg';
import Linkedin from './assets/linkedin.svg';
import Twitter from './assets/twitter.svg';
import Profilepic from './assets/Profilepic.svg';
import Back from'./assets/back.svg';

export default function ContactMe(){
    return(
        <div className={styles.container}>
            <img src={ContactmeGirl} alt="contactMe" className={styles.contactmeGirl}/>

            <div className={styles.contactContent}>
                <div className={styles.contactTitle}>Contact
                    <div className={styles.underline}></div> 
                </div>
                <div className={styles.contactLinks}>
                    <ContactLink link="https://www.behance.net/payal_patel" img={Behance} alt="Behance" />
                    <ContactLink link="https://www.facebook.com/payal2698" img={Facebook} alt="Facebook" />
                    <ContactLink link="https://www.github.com/payalppatel" img={Github} alt="Github" />
                    <ContactLink link="https://www.instagram.com/payal.smiley" img={Instagram} alt="Instagram" />
                    <ContactLink link="https://www.linkedin.com/in/payal--patel" img={Linkedin} alt="Linkedin" />
                    <ContactLink link="https://twitter.com/payal_smiley" img={Twitter} alt="Twitter" />
                </div>

                <div className={styles.profilePicture}>
                    <img src={Profilepic} alt="My Profile"  />
                </div>
                
            </div> 
            <div className={styles.homeBack}>
                <Link to="Home.js" className={styles.homeLink}><img src={Back} alt="back" />
                Home</Link>
            </div>    
        </div>
    )
}

function ContactLink(props){
    return(
        <a href={props.link} target="_blank"  rel="noopener noreferrer" ><img src={props.img} alt={props.alt} /></a>
    )
}