import React, { useContext } from 'react';
import { FollowingEvolution, EngagementRate } from './features/index';
import styles from './Growth.module.css';
import { GetInfluencerData } from '../API/GetInfluencerData';
import ReactLoading from 'react-loading';

const Growth = () => {

    const [avatar, setAvatar] = useContext(GetInfluencerData);
    if (avatar) {
        return (
            <div>
                <h1 className="MainTitle">Growth</h1>
                <div className={styles.graphWrapper}>
                    <div className={styles.graphElement}>
                        <h2 className={styles.subMenu}>Follower Growth</h2>
                        <FollowingEvolution followingGrowth={avatar} />
                    </div>

                    <div className={styles.graphElement}>
                        <h2 className={styles.subMenu}>Engagement Rate Evolution</h2>
                        <EngagementRate engagementRate={avatar} />
                    </div>

                </div>

            </div>
        )

    }

    else {
        return (
            <div className='loading'><ReactLoading type={'cylon'} color={'#00CFFC'} height={'20%'} width={'20%'} /></div>
        )
    }
}

export default Growth;
