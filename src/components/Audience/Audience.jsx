import React from 'react';
import { CountryCity } from './features'
import styles from './Audience.module.css';


const Audience = ({ audience }) => {

    if (audience) {
        return (
            <>
                <h1 className={styles.MainTitle}>Audience</h1>
                <CountryCity countryCity={audience} />
            </>
        )
    }
    
    else{
        return (<div>Loading the Audience</div>)
    }
}

export default Audience;