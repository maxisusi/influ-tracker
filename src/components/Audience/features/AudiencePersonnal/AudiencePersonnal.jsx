import React, { useState } from 'react';
import styles from './AudiencePersonnal.module.css';
import { Bar } from 'react-chartjs-2';

const AudiencePersonnal = ({ audiencePersonnal }) => {

    const mData = audiencePersonnal.audienceStatistics.audienceGenderAge.male;
    const fData = audiencePersonnal.audienceStatistics.audienceGenderAge.female;

    const { male, female } = audiencePersonnal.audienceStatistics.audienceGender;

    const maleData = [mData['0-17'], mData['18-24'], mData['25-34'], mData['35-44'], mData['45-54'], mData['55-64']];
    const femaleData = [fData['0-17'], fData['18-24'], fData['25-34'], fData['35-44'], fData['45-54'], fData['55-64']];

    const data = {
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
    const [menu, setMenu] = useState('ageGender');
    return (
        <div className={styles.audiencePersonnalWrapper}>
            <div className={styles.chartMenu}>
                <p onClick={() => setMenu('ageGender')} style={{ color: menu === 'ageGender' ? '#00CFFC' : '#B0B6BB' }}>Age & Gender</p>
                {/* <p onClick={() => setMenu('ethnicity')} style={{ color: menu === 'ethnicity' ? '#00CFFC' : '#B0B6BB' }}>Ethnicity</p>
                <p onClick={() => setMenu('language')} style={{ color: menu === 'language' ? '#00CFFC' : '#B0B6BB' }}>Language</p> */}
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
                data={data}
                width={100}
                height={10}
                options={{
                    maintainAspectRatio: true,
                    tooltips: {
                        titleFontSize: 19,
                        bodyFontSize: 15,
                        bodySpacing: 2
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
