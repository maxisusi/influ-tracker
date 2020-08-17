import React from 'react'
import { Line } from 'react-chartjs-2';
import abbreviateNumber from '../../../utils/abbreviateNumber';
const FollowingEvolution = ({ followingGrowth }) => {


    const fDatas = {
        value: [],
        timestamp: []
    }

        const followersCountArray = followingGrowth.generalStatistics.dynamics.followersCount;



        for (let i = followersCountArray.length - 10; i < followersCountArray.length; i++) {

            fDatas.value.push(followersCountArray[i].value);

            const unix_timestamp = followersCountArray[i].timestamp;
            let date = new Date(unix_timestamp);
            let month = date.getMonth();
            let day = date.getDay();
            let year = date.getFullYear();

            let formattedTime = `${month}/${year}`

            fDatas.timestamp.push(formattedTime)

        }

    

    const data = {
        labels: fDatas.timestamp,
        datasets: [
            {
                label: 'Followers Growth',
                data: fDatas.value,
                borderWidth: 1.6,
                borderColor: '#00D5FC',
                backgroundColor: '#00D5FC10',
    
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

                    tooltips: {
                        titleFontSize: 16,
                        bodyFontSize: 15,
                        bodySpacing: 2,

                    },
                    legend: {
                        display: false,
                        position: 'top',
                        fontColor: 'white',

                        labels: {
                            fontColor: 'white',
                            fontSize: 16
                        }
                    },

                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true,
                                color: '#606D7750',
                            },

                            ticks: {
                                display: true,
                                fontColor: "white",

                                callback: function (label, index, labels) {

                                    let SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

                                    let tier = Math.log10(label) / 3 | 0;

                                    if (tier === 0) return label;

                                    let suffix = SI_SYMBOL[tier];
                                    let scale = Math.pow(10, tier * 3);

                                    let scaled = label / scale;

                                    return scaled.toFixed(1) + suffix;
                                }
                            },

                        }],
                        xAxes: [{

                            gridLines: {
                                display: false,

                            },

                            display: true,
                            ticks: {
                                beginAtZero: true,
                                fontColor: "white",
                                fontSize: 12
                            }
                        }],

                    }
                }}
            />


        </div>

    )
}
export default FollowingEvolution;
