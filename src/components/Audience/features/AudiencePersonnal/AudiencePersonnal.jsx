import React, { useState, useReducer, useEffect } from 'react';
import styles from './AudiencePersonnal.module.css';
import { Bar } from 'react-chartjs-2';

const AudiencePersonnal = ({ audiencePersonnal }) => {

    const mData = audiencePersonnal.audienceStatistics.audienceGenderAge.male;
    const fData = audiencePersonnal.audienceStatistics.audienceGenderAge.female;
    const { male, female } = audiencePersonnal.audienceStatistics.audienceGender;
    const maleData = Object.values(mData);
    const femaleData = Object.values(fData);

    const [menu, setMenu] = useState('ageGender');

    const ageGenderData = {
        labels: ['0-17', '18-24', '25-34', '35-44', '45-54', '55-64'],
        datasets: [
            {
                label: 'male',
                data: maleData,
                borderWidth: 1.6,
                borderColor: '#00D5FC',
                backgroundColor: '#00D5FC99',
            },
            {
                label: 'Female',
                data: femaleData,
                borderWidth: 1.6,
                borderColor: '#EBA0FB',
                backgroundColor: '#EBA0FB99'
            },

        ]
    }

    const audienceRace = audiencePersonnal.audienceStatistics.audienceRace;
    const audienceRaceTitle = Object.keys(audienceRace)
    const audienceRaceValues = Object.values(audienceRace);


    const ethnicityData = {

        labels: audienceRaceTitle.reverse(),
        datasets: [
            {
                label: 'Bitch',
                data: audienceRaceValues.reverse(),
                borderWidth: 1.6,
                borderColor: '#00D5FC',
                backgroundColor: '#00D5FC99',
            },

        ]

    }


    const reducer = (state, action) => {
        switch (action.type) {
            case 'AGE_GENDER': {
                return { data: ageGenderData }
            }

            case 'AGE_OTHER': {
                return { data: ethnicityData }
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, ageGenderData);

    useEffect(() => {
        if (menu === 'ageGender') {
            dispatch({ type: 'AGE_GENDER' });
        }
        if (menu === 'ethnicity') {
            dispatch({ type: 'AGE_OTHER' });
        }
    }, [menu, audiencePersonnal])


    return (
        <div className={styles.audiencePersonnalWrapper}>
            <div className={styles.chartMenu}>
                <p onClick={() => setMenu('ageGender')} style={{ color: menu === 'ageGender' ? '#00CFFC' : '#B0B6BB' }}>Age & Gender</p>
                <p onClick={() => setMenu('ethnicity')} style={{ color: menu === 'ethnicity' ? '#00CFFC' : '#B0B6BB' }}>Ethnicity</p>
                {/* <p onClick={() => setMenu('language')} style={{ color: menu === 'language' ? '#00CFFC' : '#B0B6BB' }}>Language</p> */}
            </div>

            <div className={styles.subMenuInfo}>
                <div className={styles.subMenuData}>
                    <div className={styles.circleMan}></div>
                    <p>Male - <span className={styles.dataEmphazise}>{male}%</span></p>
                </div>

                <div className={styles.subMenuData}>
                    <div className={styles.circleWoman}></div>
                    <p>Female - <span className={styles.dataEmphazise}>{female}%</span></p>
                </div>

            </div>

            <Bar
                data={state.data}
                width={100}
                height={10}
                options={{
                    maintainAspectRatio: true,
                    tooltips: {
                        titleFontSize: 19,
                        bodyFontSize: 15,
                        bodySpacing: 2,
                        callbacks: {
                            label: function (tooltipItems, data) {
                                return tooltipItems.yLabel + '%';
                            }
                        }
                    },
                    legend: {
                        display: false,
                        position: 'top',
                        fontColor: 'white',

                        labels: {
                            fontColor: 'white',
                            fontSize: 16
                        },
                        callbacks: {
                            label: function (tooltipItems, data) {
                                return tooltipItems.yLabel + '%';
                            }
                        }
                    },

                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false,
                            },

                            ticks: {
                                display: false,
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
                                fontColor: "white",
                                fontSize: 14
                            }
                        }]
                    }
                }}
            />

        </div>
    )
}

export default AudiencePersonnal;
