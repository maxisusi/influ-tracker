import React from 'react';
import styles from './Stats.module.css';
import abbreviateNumber from '../../../utils/abbreviateNumber';

const Stats = ({ avatarStats }) => {

    const followersCount = avatarStats.audienceStatistics.followers;
    const engagementRate = avatarStats.generalStatistics.engagementRate;

    return (
        <div>
            <div className={styles.statsContainer}>
                <div className={styles.statsElems}>
                    <p>Followers</p>
                    <h2>{abbreviateNumber(followersCount)}</h2>
                </div>
                <div className={styles.statsElems}>
                    <p>ER</p>
                    <h2>{engagementRate.toFixed(2)}%</h2>
                </div>
            </div>

        </div>
    )
}

export default Stats;
