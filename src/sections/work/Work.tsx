import styles from './Work.module.css';

export default function Work() {
    return (
        <section id="work">
            <h1>Work</h1>
            <div className={styles.container}>
                <div className={styles.timelineContainer}>
                    <div className={styles.timeContainer}>
                        <p className={styles.time}>2020</p>
                    </div>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <p className={styles.title}>Envestnet</p>
                                <p className={styles.subTitle}>Senior Front-end Engineer</p>
                                <ul className={styles.details}>
                                    <li>
                                        Currently building UI for Next Generation Proposal which
                                        belongs to Envestnet's core platform using react
                                    </li>
                                    <li>
                                        Cleaned up and refactored existing codebase and brought
                                        down page load time as much as 500ms.
                                    </li>
                                    <li>
                                        Ideated and built a chrome extension which saved 100s of
                                        hours of developer time
                                    </li>
                                    <li>
                                        Part of a team that built an Annuity dashboard and became
                                        runners-up in an Internal hackathon. This was later
                                        adopted by Envestnet
                                    </li>
                                    <li>Helped to setup a new team in US</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineContainer}>
                    <div className={styles.timeContainer}>
                        <p className={styles.time}>2018</p>
                    </div>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <p className={styles.title}>Clevero</p>
                                <p className={styles.subTitle}>Full-stack Engineer</p>

                                <ul className={styles.details}>
                                    <li>
                                        Worked as a part of a small team to develop an HR
                                        management platform for small to midsized companies
                                    </li>
                                    <li>Mainly involved with React and Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
