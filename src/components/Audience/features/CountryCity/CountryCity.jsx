import React, { useState } from 'react'
import { HorizontalBar } from 'react-chartjs-2';
import styles from './CountryCity.module.css';

import { defaults } from 'react-chartjs-2';
import merge from 'lodash.merge';

const CountryCity = ({ countryCity }) => {



    const dataLabels = [];
    const dataStats = [];

    for (let i = 0; i < 5; i++) {
        dataLabels.push(countryCity.audienceStatistics.countries[i].showName);
        dataStats.push(countryCity.audienceStatistics.countries[i].count);
    }


    merge(defaults, {
        global: {
            defaultFontFamily: "Neue Haas Grotesk",
            defaultFontStyle: '500',

            legend: {
                display: false,
            }
        },
    });


    const data = {
        labels: dataLabels,
        datasets: [{
            label: 'People',
            data: dataStats,
            borderWidth: 1.6,
            borderColor: [
                '#00CFFC',
                '#4EDFFF',
                '#8DEBFF',
                '#BCF3FF',
                '#D6F8FF'
            ],
            backgroundColor: [
                '#00CFFC99',
                '#4EDFFF99',
                '#8DEBFF99',
                '#BCF3FF99',
                '#D6F8FF99'
            ],

        }]
    }


    return (
        <>
            <div className={styles.chart}>
                <HorizontalBar
                    data={data}
                    width={300}
                    height={90}
                    options=
                    {{
                        maintainAspectRatio: true,
                        tooltips: {
                            titleFontSize: 19,
                            bodyFontSize: 15,
                            bodySpacing: 2
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: false,
                                },

                                ticks: {
                                    fontColor: "white",
                                    fontSize: 18,
                                    stepSize: 1,
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{

                                gridLines: {
                                    display: true,
                                    color: '#606D7750',
                                },

                                display: true,
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: "white"
                                }
                            }]
                        }
                    }}
                />
            </div>
        </>
    )

}



export default CountryCity;