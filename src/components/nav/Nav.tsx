import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navLinks}>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
