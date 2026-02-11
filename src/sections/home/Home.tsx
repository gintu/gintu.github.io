import linkedin from '@assets/linkedin.svg';
import github from '@assets/github.svg';
import facebook from '@assets/facebook.svg';
import youtube from '@assets/youtube.svg';
import styles from './Home.module.css';

export default function Home() {
    return (
        <section className={styles.home} id="home">
            <div className={styles.scrollupContainer}>
                <h3 className={styles.homeH3}>Hi,</h3>
            </div>
            <h1 className={styles.homeH1}>I am Gintu Tom</h1>

            <h2 className={styles.homeH2}>Program writer @ Vieu</h2>
            <div className={styles.iconsContainer}>
                <a
                    href="https://github.com/gintu"
                    rel="noreferrer"
                    target="_blank"
                    style={{ marginTop: -2 }}
                >
                    <img src={github} alt="github" />
                </a>

                <a
                    href="https://in.linkedin.com/in/gintu-tom-080b2899"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a
                    href="https://www.facebook.com/gintu.tom"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={facebook} alt="facebook" />
                </a>
                <a
                    href="https://www.youtube.com/c/gintutom"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={youtube} alt="youtube" />
                </a>
            </div>
        </section>
    );
}
