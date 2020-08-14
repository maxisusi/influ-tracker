import React from 'react'
import styles from './SimilarAccount.module.css';

const SimilarAccount = ({ accountData }) => {


        return (
            <div>
                <h1 className="MainTitle">Similar Accounts</h1>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.imgCard}></div>
                        <p >@laura_</p>
                        <h3>Laura Dam</h3>
                        <p className={styles.engagementRate}>ER : 2.3%</p>

                    </div>
                </div>
            </div>
        )

}


export default SimilarAccount;