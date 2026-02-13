import Divider from "@/components/divider/Divider";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={"section"}>
      <div className="grid-container">
        <div className="col-span-4">
          <h2 className="text-black">My Super Powers</h2>
        </div>
        <div className="col-span-8">
          <div className="col-span-8">
            <div className={styles.col2grid} style={{ marginBottom: "3rem" }}>
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
              <div>
                <p className="text-black">Out of office</p>
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
          </div>
          <Divider />
        </div>
      </div>
    </section>
  );
}
