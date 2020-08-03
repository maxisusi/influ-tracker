import React from 'react'
import styles from './RealEngagment.module.css';
import abbreviateNumber from '../../../utils/abbreviateNumber';

const RealEngagement = ({ engagement }) => {

    const { audienceStatistics, generalStatistics } = engagement;

    
    const realAudience = audienceStatistics.followers * (audienceStatistics.audienceAccountType.personal / 100);
    const realAvgEngagement = generalStatistics.avgEngagements * (audienceStatistics.audienceAccountType.personal / 100);

    return (
        <div>
            <div className={styles.engagementWrapper}>
                <div className={styles.engagementBlock}>
                    <p>Quality Audience</p>
                    <h2>{abbreviateNumber(realAudience)}</h2>
                </div>

                <div className={styles.engagementBlock}>
                    <p>Authentic Engagement</p>
                    <h2>{abbreviateNumber(realAvgEngagement)} <span className={styles.smallText}>per post</span></h2>

                </div>

            </div>
        </div>
    )
}

export default RealEngagement;
