import React from 'react';
import { FollowingEvolution, EngagementRate } from './features/index';
import styles from './Growth.module.css';

const Growth = ({ growth }) => {

    if (growth) {
        return (
            <div>
                <h1 className="MainTitle">Growth</h1>
                <div className={styles.graphWrapper}>
                    <div className={styles.graphElement}>
                        <h2 className={styles.subMenu}>Follower Growth</h2>
                        <FollowingEvolution followingGrowth={growth} />
                    </div>

                    <div className={styles.graphElement}>
                        <h2 className={styles.subMenu}>Engagement Rate Evolution</h2>
                        <EngagementRate engagementRate={growth} />
                    </div>

                </div>

            </div>
        )

    }

    else {
        return (
            <div>
                Loading Growth Datas
            </div>
        )
    }
}

export default Growth;
