import React from 'react';
import { FollowingEvolution } from './features/index';

const Growth = ({ growth }) => {

    if (growth) {
        return (
            <div>
                <h1 className="MainTitle">Growth</h1>
                <div>
                    <FollowingEvolution followingGrowth={growth} />
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
