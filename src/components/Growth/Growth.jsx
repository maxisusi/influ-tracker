import React from 'react';
import { FollowingEvolution } from './features/index';

const Growth = ({growth}) => {
    return (
        <div>
            <h1 className="MainTitle">Growth</h1>
            <div>
                <FollowingEvolution followingGrowth={growth} />
            </div>

        </div>
    )
}

export default Growth;
