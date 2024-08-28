import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id= "about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/image.png")} alt="My Picture"
                className={styles.aboutImage}
                />
                
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full-stack Developer</h3>
                            <p>
                            I'm a dynamic and result-driven Software Engineer with a proven record of accomplishment in designing, 
                            developing, deploying and maintaining cutting-edge software applications.
                            </p><br></br>
                            <p>
                            I'm a proactive team player and a fast learner who seeks the opportunity to play a hands on role in an enabling
                            environment where i can apply my skills to contribute to the growth of the organization.
                            </p>
                        </div>
                    </li>
                </ul>
           
            </div>
        </section>
    );
};