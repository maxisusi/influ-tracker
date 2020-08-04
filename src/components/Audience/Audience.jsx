import React from 'react';
import { CountryCity } from './features'
import styles from './Audience.module.css';


const Audience = () => {
    return (
        <>
        <h1 className={styles.MainTitle}>Audience</h1>
        <CountryCity />
        </>
    )
}

export default Audience;