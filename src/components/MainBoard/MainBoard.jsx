import React, { useState, useEffect } from 'react';

import { Avatar, Stats, RealEngagement, Scoreboard } from './features';
import axios from 'axios';
import styles from './MainBoard.module.css';

const MainBoard = () => {

    const API_KEY = 'https://app.influenceye.com/api/v1/profile/findByUsername?apiKey=d3245b91-9442-8a52-de68-bb1e253bf807&network=instagram&username=cristiano'
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        axios.get(API_KEY)
            .then(response => {
                setAvatar(response.data);
            })
    }, [API_KEY])

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


