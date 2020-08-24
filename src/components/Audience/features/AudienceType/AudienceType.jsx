import React from 'react';
import styles from './AudienceType.module.css';
import { Doughnut } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import merge from 'lodash.merge';

const AudienceType = ({ audienceInfo }) => {

    const { personal, nonPersonal, massFollower, fakeAccount } = audienceInfo.audienceStatistics.audienceAccountType;


    const data = {
        labels: [`Real People`, `Non personal`, `Mass Followers`, `Suspicous`],
        datasets: [{
            label: 'People',
            data: [personal, nonPersonal, massFollower, fakeAccount],
            borderWidth: 1.6,
            borderColor: [
                '#0DFFF5',
                '#ECA1FB',
                '#00CFFC',
                '#FBA0A0',
            ],
            backgroundColor: [
                '#0DFFF599',
                '#ECA1FB99',
                '#00CFFC99',
                '#FBA0A099',
            ],

        }]
    }
    return (
        <div className={styles.AudienceWrapper}>
            <div className={styles.AudienceTypeMenu}>
                <p >Audience Type</p>
                <Doughnut
                    data={data}
                    width={600}
                    height={250}
                    options=
                    {{
                        maintainAspectRatio: true,
                        tooltips: {
                            titleFontSize: 19,
                            bodyFontSize: 18,
                            bodySpacing: 2,
                            callbacks: {
                                title: function (tooltipItem, data) {
                                    return `${data.labels[tooltipItem[0].index]}`;
                                },
                                label: function (tooltipItem, data) {
                                    return `${data.datasets[0].data[tooltipItem.index]}%`;
                                },

                            }

                        },
                        legend: {
                            display: true,
                            position: 'left',
                            labels: {
                                fontColor: 'white',
                                fontSize: 18,

                            }

                        }

                    }} />
            </div>
        </div>
    )
}

export default AudienceType;
