import {useState} from "react";
import {useEffect} from "react";

import styles from "../css_modules/profilecard.module.css"

export default function ProfileCard({profile}) {
    if (profile === null) {
        return null;
    }
    return (
        <>
            <div className={styles.profileCard}>
                <img className={styles.profileIcon} src={profile.avatar_url} />
                <h1 className={styles.profileName}>{profile.login}</h1>
                <p className={styles.profileHandle}>@HussBTWYT</p>
                <p className={styles.profileBio}>{profile.bio}</p>
                <p className={styles.profileJoined}>Joined {profile.created_at}</p>
                <hr />
                <div className={styles.profileStats}>
                    <p className={styles.profileFollowers}>{profile.followers}</p>
                    <p className={styles.profileFollowing }>{profile.following}</p>
                    <p className={styles.profileRepos}>{profile.public_repos}</p>  
                </div>

                <div className={styles.profileStats}>
                    <p className={styles.profileFollowers}>Followers</p>
                    <p className={styles.profileFollowing }>Following</p>
                    <p className={styles.profileRepos}>Repositories</p>  
                </div>
                
            </div>
        </>
    )
}