import React from 'react';

import { Avatar, Stats, RealEngagement, Scoreboard } from './features';

import styles from './MainBoard.module.css';

const MainBoard = ({avatar}) => {

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


