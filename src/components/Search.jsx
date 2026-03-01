import styles from "../css_modules/search.module.css";
import { useState } from "react";
import { useEffect } from "react";


export default function Search({setProfile}){
    const [query, setQuery] = useState("");
    const [tempInput, setTempInput] = useState("");
    
    
    function handleSubmit(e) {
        e.preventDefault();
        setQuery(query => tempInput);
    }

    useEffect(() => {
        if (!query) return;

        async function fetchProfile() {
            try {
            const res = await fetch(`https://api.github.com/users/${query}`);

            if (!res.ok) {
                throw new Error("User not found");
            }

            const data = await res.json();
            console.log(data); // Production -> Comment this line out
            setProfile(data);

            } catch (err) {
                console.error(err.message);
            }
        }

        fetchProfile();
    }, [query]);
    return (
        <>
            <div className={styles.search}>
                <div className={styles.texts}>
                    
                    <h1>GitProfile AI</h1>
                    <p>AI-powered GitHub profile analysis with recruiter-grade insights</p>
                </div>
                <div className={styles.searchBar}>
                    <form onSubmit={handleSubmit}>
                            <input 
                                id="query"
                                value={tempInput} 
                                onChange={
                                    (e) => setTempInput(e.target.value)
                                } 
                                placeholder="Enter GitHub username..."
                                type="text" 
                            />

                            <button><span>Analyze &#8594;</span></button>
                    </form>
                    
                </div>
                
                <div className={styles.footerText}>
                    <p>Get AI-powered insights into GitHub profiles and coding skills</p>
                </div>
                
                
            </div>
        </>
    )
}