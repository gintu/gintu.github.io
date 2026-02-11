import Chips from '@components/chips/Chips';
import skillList from './skillList';
import styles from './Skill.module.css';

export default function Skill() {
    return (
        <section className={styles.skills}>
            <h1>Skills</h1>
            <div>
                {skillList.map((skill, index) => (
                    <div key={index} className={styles.chipSection}>
                        <h4>{skill.title}</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {skill.content.map((cont, i) => (
                                <Chips key={i} content={cont} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
