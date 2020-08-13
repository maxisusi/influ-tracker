import React from 'react'
import { Line } from 'react-chartjs-2';
import abbreviateNumber from '../../../utils/abbreviateNumber';
const FollowingEvolution = ({ followingGrowth }) => {


    const fDatas = {
        value: [],
        timestamp: []
    }
    if (followingGrowth) {

        const followersCountArray = followingGrowth.generalStatistics.dynamics.followersCount;
        console.log(followersCountArray);


        for(let i = followersCountArray.length-30; i < followersCountArray.length; i++){

            fDatas.value.push(followersCountArray[i].value);

            const unix_timestamp = followersCountArray[i].timestamp;
            let date = new Date(unix_timestamp);
            let month = date.getMonth();
            let year = date.getFullYear();

            let formattedTime = month + '/' + year

            fDatas.timestamp.push(formattedTime)

        }


    


        console.log(fDatas);

    }

    const data = {
        labels: fDatas.timestamp,
        datasets: [
            {
                label: 'Followers Growth',
                data: fDatas.value,
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
                height={30}
                options={{
                    maintainAspectRatio: true,

                }}
            />

        </div>

    )
}
export default FollowingEvolution;
