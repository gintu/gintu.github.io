import styles from "./Home.module.css";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";
import Divider from "@/components/divider/Divider";
import gintu from "../../images/gintu.jpeg";

export default function Home() {
  return (
    <section className={"section"}>
      <div className="grid-container">
        <div className="col-span-4">
          <div className={styles.imageContainer}>
            <img src={gintu} alt="Gintu" />
          </div>
        </div>
        <div className="col-span-8">
          <h1 className="text-black">Hello,</h1>
          <h1>I'm Gintu Tom</h1>
          <h3
            style={{
              marginBottom: "10px",
            }}
          >
            developer , designer
          </h3>
          <h3>
            I'm an engineer who thrives on all things ambiguous and gnarly. With
            a strong focus on craft, storytelling, and high exploration output,
            I enjoy diving into the details, solving problems thoughtfully, and
            bringing order to chaos.
          </h3>
          <div className={styles.col2grid}>
            <div>
              <p className="text-black">Day job</p>
              <p>
                I'm a product designer who thrives on all things ambiguous and
                gnarly. With a strong focus on craft, storytelling, and high
                exploration output, I enjoy diving into the details, solving
                problems thoughtfully, and bringing order to chaos.
              </p>
            </div>
            <div>
              <p className="text-black">Out of office</p>
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
          <Divider style={{ marginTop: "3rem" }} />
        </div>
      </div>
    </section>
  );
}
