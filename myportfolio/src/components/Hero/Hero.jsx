import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Henrietta <span>Onoge</span></h1>
        <p className={styles.description}>
          I'm a highly motivated and results-oriented full-stack developer with a passion for building
          responsive, engaging and user-friendly applications and deploy efficient and secure backend systems
          using a variety of technologies including JavaScript, Python(Flask and Django), NodeJS(Express), React and
          MongoDB. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:hetty8004@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/image1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};