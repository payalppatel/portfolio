import React from 'react';
import styles from './styles/project.module.css';
import ProjectBackground from './assets/ProjectBackground.svg';
import {Link} from 'react-router-dom';

export default function Projects(){
    return(
        <div className={styles.container}>
            <div className={styles.projectContent}>
                <div className={styles.projectTitle}>Projects
                        <div className={styles.underline}></div>
                    </div> 
            </div>
        </div>
    )
}