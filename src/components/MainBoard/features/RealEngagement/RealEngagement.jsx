import React from 'react'
import styles from './RealEngagment.module.css';
import abbreviateNumber from '../../../utils/abbreviateNumber';
import CountUp from 'react-countup';


const RealEngagement = ({ engagement }) => {

    const { audienceStatistics, generalStatistics } = engagement;


    const realAudience = audienceStatistics.followers * (audienceStatistics.audienceAccountType.personal / 100);
    const realAvgEngagement = generalStatistics.avgEngagements * (audienceStatistics.audienceAccountType.personal / 100);

    return (
        <div>
            <div className={styles.engagementWrapper}>
                <div className={styles.engagementBlock}>
                    <p>Quality Audience</p>
                    <h2>
                        <CountUp
                            start={0}
                            end={realAudience}
                            duration={2.5}
                            formattingFn={(value) => {

                                var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
                                let tier = Math.log10(value) / 3 | 0;

                                // if zero, we don't need a suffix
                                if (tier === 0) return value;

                                // get suffix and determine scale
                                let suffix = SI_SYMBOL[tier];
                                let scale = Math.pow(10, tier * 3);

                                // scale the number
                                let scaled = value / scale;

                                // format number and add suffix
                                return scaled.toFixed(1) + suffix;
                            }}>

                        </CountUp>
                    </h2>
                </div>

                <div className={styles.engagementBlock}>
                    <p>Authentic Engagement</p>
                    <h2>
                        <CountUp
                            start={0}
                            end={realAvgEngagement}
                            duration={2.5}
                            formattingFn={(value) => {

                                var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
                                let tier = Math.log10(value) / 3 | 0;

                                // if zero, we don't need a suffix
                                if (tier === 0) return value;

                                // get suffix and determine scale
                                let suffix = SI_SYMBOL[tier];
                                let scale = Math.pow(10, tier * 3);

                                // scale the number
                                let scaled = value / scale;

                                // format number and add suffix
                                return scaled.toFixed(1) + suffix;
                            }}>

                        </CountUp>
                        <span className={styles.smallText}>per post</span>
                    </h2>

                </div>

            </div>
        </div>
    )
}

export default RealEngagement;
