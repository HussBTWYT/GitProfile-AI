import styles from "../css_modules/search.module.css"

export default function Search(){
    return (
        <>
            <div className={styles.search}>
                <div className={styles.texts}>
                    <h1>GitProfile AI</h1>
                    <p>AI-powered GitHub profile analysis with recruiter-grade insights</p>
                </div>
                <div className={styles.searchBar}>
                    <input placeholder="Enter GitHub username..." />
                    <button>Analyze &#8594;</button>
                </div>
                
            </div>
        </>
    )
}