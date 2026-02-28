import styles from "../css_modules/footer.module.css";

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <hr />

                <div className={styles.texts}>
                    <p>🧑‍💻 Built by Hussain Ahmed</p>

                    <p className={styles.gitLink}><a href="https://github.com/HussBTWYT">GitHub</a></p>
                </div>
            </div>    
        </>
    )
}