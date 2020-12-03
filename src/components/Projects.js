import React from 'react';
import styles from './styles/project.module.css';

import {Link} from 'react-router-dom';
import Back from './assets/back.svg';

export default function Projects(){
    return(
        <div className={styles.container}>
            <div className={styles.projectContent}>
                <div className={styles.projectTitle}>Projects
                        <div className={styles.underline}></div>
                </div>

                <div className={styles.projectGrid}>
                    <ProjectLink link="/smart-lighting-system.pdf" text="Smart Lighting System" />     
                    <ProjectLink link="https://github.com/payalppatel" text="Hotel Management System" />
                    <ProjectLink link="https://goodfoodwtp.netlify.app" text="GOOD FOOD - Food Delivery Website" />
                    <ProjectLink link="https://github.com/payalppatel/warn-cam" text="WarnCam-Hidden Camera Detector" />
                    
                </div> 
            </div>
            <div className={styles.homeBack}>
                <Link to="/" className={styles.homeLink}><img src={Back} alt="back" />
                Home</Link>
            </div> 
        </div>
    )
}

function ProjectLink(props){
    return(
        <div className={styles.myProjects}>
            <a href={props.link}><p>{props.text}</p></a>
        </div>
    )
}