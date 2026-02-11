import styles from '../work/Work.module.css';

export default function Education() {
    return (
        <section id="education">
            <h1>Education</h1>
            <div className={styles.container}>
                <div className={styles.timelineContainer}>
                    <div className={styles.timeContainer}>
                        <p className={styles.time}>2018</p>
                    </div>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <p className={styles.title}>
                                    Rajiv Gandhi Institute of Technology, Kottayam
                                </p>
                                <p className={styles.subTitle}>
                                    B.Tech in Computer Science and Engineering
                                </p>
                                <ul className={styles.details}>
                                    <li>
                                        Served as the president of Computer Science Association
                                    </li>
                                    <li>Conducted and Coordinated several events</li>
                                    <li>
                                        Won several prices for Web development, Quizes and Idea
                                        Pitching competitions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineContainer}>
                    <div className={styles.timeContainer}>
                        <p className={styles.time}>2014</p>
                    </div>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <p className={styles.title}>De Paul Public School, Kottayam</p>
                                <p className={styles.subTitle}>General Subjects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
