import React, { useState, useEffect } from 'react'
import { HorizontalBar } from 'react-chartjs-2';
import styles from './CountryCity.module.css';

import { defaults } from 'react-chartjs-2';
import merge from 'lodash.merge';

const CountryCity = ({ countryCity }) => {

    const [dataSet, setDataSet] = useState({
        dataLabel: null,
        dataElem: null,
    });

    const [menu, setMenu] = useState('country');
    
    useEffect(() => {

        const countryLabel = [];
        const countryData = [];

        if (menu === 'country') {

            for (let i = 0; i < 5; i++) {
                countryLabel.push(countryCity.audienceStatistics.countries[i].showName);
                countryData.push(countryCity.audienceStatistics.countries[i].percent);

            }
        }

        else if (menu === 'city'){
            for (let i = 0; i < 5; i++) {
                countryLabel.push(countryCity.audienceStatistics.topCities[i].showName);
                countryData.push(countryCity.audienceStatistics.topCities[i].percent);

            }
        }

        setDataSet({
            dataLabel: countryLabel,
            dataElem: countryData,

        })

    }, [menu,countryCity])

    merge(defaults, {
        global: {
            defaultFontFamily: "Neue Haas Grotesk",
            defaultFontStyle: '500',
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
        <div className={styles.chartWrapper}>
            <div className={styles.chartMenu}>
                <p onClick={() => setMenu('country')} style={{ color: menu === 'country' ? '#00CFFC' : '#B0B6BB' }}>Country</p>
                <p onClick={() => setMenu('city')}style={{ color: menu === 'city' ? '#00CFFC' : '#B0B6BB' }}>City</p>
            </div>
            <div className={styles.chart}>
                <HorizontalBar
                    data={data}
                    width={200}
                    height={60}
                    options=
                    {{
                        maintainAspectRatio: true,
                        tooltips: {
                            titleFontSize: 19,
                            bodyFontSize: 15,
                            bodySpacing: 2,
                            callbacks: {
                                label: function(tooltipItems, data) { 
                                    return tooltipItems.xLabel + '%';
                                }
                            }
                            
                        },
                        legend: {
                            display: true,
                            position: 'top',
                            fontColor: 'white',

                            labels: {
                                fontColor: 'white',
                                fontSize: 14
                            }
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
        </div>
    )

}



export default CountryCity;