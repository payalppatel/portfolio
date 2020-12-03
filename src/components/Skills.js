import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/skills.module.css";
import Girl from "./assets/Girl.svg";
import Back from "./assets/back.svg";
const myskills = [
  { text: "HTML", per: 95 },
  { text: "CSS", per: 90 },
  { text: "Javascript", per: 70 },
  { text: "PHP", per: 75 },
  { text: "Bootstrap", per: 70 },
  { text: "ReactJS", per: 60 },
  { text: "ReactNative", per: 65 },
  { text: "AdobeXD", per: 80 },
  { text: "Photoshop", per: 75 },
];

export default function Skills() {
  return (
    <div className={styles.container}>
      <img src={Girl} alt="girl" className={styles.skillsGirl} />

      <div className={styles.skillsProperties}>
        <div className={styles.skillsTitle}>
          Skills
          <div className={styles.underline}></div>
        </div>

        <div className={styles.mySkills}>
          {myskills.map((s, i) => {
            return <Skill text={s.text} per={s.per} key={i} />;
          })}
        </div>
      </div>

      <div className={styles.homeBack}>
        <Link to="/" className={styles.homeLink}>
          <img src={Back} alt="back" />
          Home
        </Link>
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className={styles.skillsName}>
      <p>{props.text}</p>
      <div className={styles.emptyBar}>
        <div
          className={styles.filledBar}
          style={{ width: `${props.per}%` }}
        ></div>
      </div>
    </div>
  );
}
