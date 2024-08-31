import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Have a project in mind?</p>
                <p>Let's build something together!</p> <br></br>
                <a href="https://docs.google.com/document/d/1GiTdI_cPU8cqUztUw5xNmdnUfy9YpSPRM9BfQ-1JJAw" className={styles.contactBtn}>
                   Download CV
                </a>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt=" Email Icon" />
                    <a href="mailto:hetty8004@gmail.com">hetty8004@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt=" LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/henrietta-samuel">linkedin.com/in/henrietta-samuel</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt=" Github Icon" />
                    <a href="https://github.com/Samuelhetty">github.com/Samuelhetty</a>
                </li>
            </ul>

        </footer>

    );
};