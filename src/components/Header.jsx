import styles from "../css_modules/header.module.css";

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <nav className={styles.navbar}>
                    <h1 className={styles.logo}>GitProfile AI</h1>

                    <ul className={styles.navLinks}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>

                </nav>
            </div>
            <hr />
        </>
    );
}