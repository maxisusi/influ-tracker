import React, { useState, useEffect } from 'react'
import { HorizontalBar } from 'react-chartjs-2';
import styles from './CountryCity.module.css';

import { defaults } from 'react-chartjs-2';
import merge from 'lodash.merge';

const CountryCity = ({ countryCity }) => {

    const dataFromAPI = countryCity;
    const [dataSet, setDataSet] = useState({
        dataLabel: null,
        dataElem: null,
    });

    const [menu, setMenu] = useState('country');
    
    useEffect(() => {

        const countryLabel = [];
        const countryData = [];

        if (menu == 'country') {

            for (let i = 0; i < 5; i++) {
                countryLabel.push(dataFromAPI.audienceStatistics.countries[i].showName);
                countryData.push(dataFromAPI.audienceStatistics.countries[i].count);

            }
        }

        else {
            for (let i = 0; i < 5; i++) {
                countryLabel.push(dataFromAPI.audienceStatistics.topCities[i].showName);
                countryData.push(dataFromAPI.audienceStatistics.topCities[i].count);

            }
        }

        setDataSet({
            dataLabel: countryLabel,
            dataElem: countryData,

        })

    }, [menu])

    console.log(dataSet)


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
        labels: dataSet.dataLabel,
        datasets: [{
            label: 'People',
            data: dataSet.dataElem,
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
            <div>
                <p>Country</p>
                <p>City</p>
            </div>
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