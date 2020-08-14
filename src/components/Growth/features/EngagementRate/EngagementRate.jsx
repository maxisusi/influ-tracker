import React from 'react'
import { Line } from 'react-chartjs-2';
import abbreviateNumber from '../../../utils/abbreviateNumber';

const EngagementRate = ({ engagementRate }) => {


    const fDatas = {
        value: [],
        timestamp: []
    }

        const engagementRatesArray = engagementRate.generalStatistics.dynamics.engagementRates;
        console.log(engagementRate);


        for (let i = engagementRatesArray.length - 10; i < engagementRatesArray.length; i++) {

            fDatas.value.push(engagementRatesArray[i].value.toFixed(2));

            const unix_timestamp = engagementRatesArray[i].timestamp;
            let date = new Date(unix_timestamp);
            let month = date.getMonth();
            let year = date.getFullYear();

            let formattedTime = `${month}/${year}`

            fDatas.timestamp.push(formattedTime)

        }



    const data = {
        labels: fDatas.timestamp,
        datasets: [
            {
                label: 'Following',
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
                                    return label + '%';
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

export default EngagementRate;
