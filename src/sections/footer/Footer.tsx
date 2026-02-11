import styles from './Footer.module.css';

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.footerDiv1}>
                    <h1>gintu.</h1>
                </div>
                <div className={styles.footerDiv2}>
                    <h3 className={styles.title}>Contact</h3>
                    <a
                        className={styles.linkStyles}
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gintutom@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                    >
                        gintutom@gmail.com
                    </a>
                </div>
                <div className={styles.footerDiv3}>
                    <h3 className={styles.title}>Connect</h3>
                    <a
                        className={styles.linkStyles}
                        href="https://in.linkedin.com/in/gintu-tom-080b2899"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Linkedin
                    </a>
                    <a
                        className={styles.linkStyles}
                        href="https://www.facebook.com/gintu.tom/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Facebook
                    </a>
                    <a
                        className={styles.linkStyles}
                        href="https://twitter.com/gintutom"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Twitter
                    </a>
                    <a
                        className={styles.linkStyles}
                        href="https://github.com/gintu"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Github
                    </a>
                </div>
                <div className={styles.footerDiv4}>
                    <h3 className={styles.title}>Content</h3>
                    <a className={styles.linkStyles} href="#about">
                        About
                    </a>
                    <a className={styles.linkStyles} href="#work">
                        Work
                    </a>
                    <a className={styles.linkStyles} href="#home">
                        Home
                    </a>
                    <a className={styles.linkStyles} href="#education">
                        Education
                    </a>
                    <a className={styles.linkStyles} href="#projects">
                        Projects
                    </a>
                </div>
            </div>
            <p className={styles.bottomText}>
                Designed and Built by <b>gintu</b> © {new Date().getFullYear()}
            </p>
        </section>
    );
}
