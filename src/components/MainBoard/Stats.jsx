import React from 'react';
import styles from './MainBoard.module.css';

const Stats = ({ avatarStats }) => {

    const followersCount = avatarStats.audienceStatistics.followers;
    const engagementRate = avatarStats.generalStatistics.engagementRate;

    console.log(engagementRate);

    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

    function abbreviateNumber(number){
    
        // what tier? (determines SI symbol)
        var tier = Math.log10(number) / 3 | 0;
    
        // if zero, we don't need a suffix
        if(tier === 0) return number;
    
        // get suffix and determine scale
        var suffix = SI_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);
    
        // scale the number
        var scaled = number / scale;
    
        // format number and add suffix
        return scaled.toFixed(1) + suffix;
    }

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
