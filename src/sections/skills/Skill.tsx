import Chips from "@components/chips/Chips";
import skillList from "./skillList";
import styles from "./Skill.module.css";

import Divider from "@/components/divider/Divider";

export default function Skills() {
  return (
    <section className={"section"}>
      <div className="grid-container">
        <div className="col-span-4">
          <h2 className="text-black">Skills</h2>
        </div>
        <div className="col-span-8">
          <div className={styles.gridCol4}>
            {skillList.map((skill, index) => (
              <div key={index} className={styles.box}>
                <p className="text-black">{skill.name}</p>
                <p>{skill.category}</p>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
