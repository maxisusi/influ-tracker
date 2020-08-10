import React, { useState } from 'react';
import styles from './AudiencePersonnal.module.css';
import { Bar } from 'react-chartjs-2';

const AudiencePersonnal = ({ audiencePersonnal }) => {

    const data = {
        labels: ['label1', 'label2'],
        datasets: [{
            label: 'People',
            data: [22,33],
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
    const [menu, setMenu] = useState('ageGender');
    return (
        <div className={styles.audiencePersonnalWrapper}>
            <div className={styles.chartMenu}>
                <p onClick={() => setMenu('ageGender')} style={{ color: menu === 'ageGender' ? '#00CFFC' : '#B0B6BB' }}>Age & Gender</p>
                <p onClick={() => setMenu('ethnicity')} style={{ color: menu === 'ethnicity' ? '#00CFFC' : '#B0B6BB' }}>Ethnicity</p>
                <p onClick={() => setMenu('language')} style={{ color: menu === 'language' ? '#00CFFC' : '#B0B6BB' }}>Language</p>
            </div>

            <Bar
                data={data}
                width={100}
                height={50}
                options={{ maintainAspectRatio: false }}
            />

        </div>
    )
}

export default AudiencePersonnal;
