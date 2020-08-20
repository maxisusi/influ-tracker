import React, {useContext} from 'react';
import { Avatar, Stats, RealEngagement, Scoreboard } from './features';
import styles from './MainBoard.module.css';
import {GetInfluencerData} from '../API/GetInfluencerData';

const MainBoard = () => {

    const [avatar, setAvatar] = useContext(GetInfluencerData);

    if (avatar) {
        return (
            <div>
                <div className={styles.mainBoardElement}>
                    <Avatar avatarName={avatar} />
                    <Stats avatarStats={avatar} />

                </div>
                <div className={styles.mainBoardElement2Row}>
                    <Scoreboard scoring={avatar} />
                    <RealEngagement engagement={avatar} />
                </div>
            </div>
        )
    }

    else {
        return (<div>Loading MainBoard...</div>)
    }


};

export default MainBoard;


