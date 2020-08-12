import React from 'react'
import {Line} from 'react-chartjs-2';
const FollowingEvolution = ({followingGrowth}) => {

    if(followingGrowth)
        console.log(followingGrowth.generalStatistics.dynamics.followersCount.map( x => {
            x.key = "timeStamp";
        }));


    const data = {
        labels: ['22','222'],
        datasets: [
            {
                label: 'Followers',
                data: [22,12,15,33],
                borderWidth: 1.6,
                borderColor: '#00D5FC',
                backgroundColor: '#00D5FC99',
            },

        ]
    }
    return (
        <div>

            <Line
                data={data}
                width={100}
                height={10}
                options={{
                    maintainAspectRatio: true,
                    
                }}
            />

        </div>

    )
}
export default FollowingEvolution;
