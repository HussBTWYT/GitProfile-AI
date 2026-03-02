import {useState} from "react";
import {useEffect} from "react";

import styles from "../css_modules/profilecard.module.css"

export default function ProfileCard({profile}) {
    if (profile === null) {
        return null;
    }

    const joinedDate = new Date(profile.created_at).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
    });
    return (
        <>
            <div className={styles.profileCard}>
                <img className={styles.profileIcon} src={profile.avatar_url} />
                <h1 className={styles.profileName}>{profile.login}</h1>
                <p className={styles.profileHandle}>@{profile.login}</p>
                <p className={styles.profileBio}>{profile.bio}</p>
                <p className={styles.profileJoined}>Joined {joinedDate}</p>
                <hr />
                <div className={styles.profileStats}>
                    <div className={styles.stat}>
                        <p className={styles.statNumber}>{profile.followers}</p>
                        <p className={styles.statLabel}>Followers</p>
                    </div>

                    <div className={styles.stat}>
                        <p className={styles.statNumber}>{profile.following}</p>
                        <p className={styles.statLabel}>Following</p>
                    </div>

                    <div className={styles.stat}>
                        <p className={styles.statNumber}>{profile.public_repos}</p>
                        <p className={styles.statLabel}>Repositories</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}