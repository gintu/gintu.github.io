import styles from "./Home.module.css";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";

export default function Home() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.span4}>
          <img src="/images/gintu.png" alt="Gintu" />
        </div>
        <div className={styles.span8}>
          <h1>Hello,</h1>
          <h1>I'm Gintu Tom</h1>
          <h3
            style={{
              marginBottom: "10px",
            }}
          >
            developer , designer
          </h3>
          <h3>
            I'm a product engineer who thrives on all things ambiguous and
            gnarly. With a strong focus on craft, storytelling, and high
            exploration output, I enjoy diving into the details, solving
            problems thoughtfully, and bringing order to chaos.
          </h3>
          <div className={styles.col2grid}>
            <div>
              <p>Day job</p>
              <p>
                I'm a product designer who thrives on all things ambiguous and
                gnarly. With a strong focus on craft, storytelling, and high
                exploration output, I enjoy diving into the details, solving
                problems thoughtfully, and bringing order to chaos.
              </p>
            </div>
            <div>
              <p>Out of office</p>
              <p>
                I'm a product designer who thrives on all things ambiguous and
                gnarly. With a strong focus on craft, storytelling, and high
                exploration output, I enjoy diving into the details, solving
                problems thoughtfully, and bringing order to chaos.
              </p>
            </div>
          </div>
          <div className={styles.iconContainer}>
            <a href="#">
              <img src={github} alt="Github" />
            </a>
            <a href="#">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="#">
              <img src={youtube} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
