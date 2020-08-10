import React from 'react';
import { CountryCity, AudienceType } from './features'
import styles from './Audience.module.css';


const Audience = ({ audience }) => {

    if (audience) {
        return (
            <>
                <h1 className={styles.MainTitle}>Audience</h1>
                <div className={styles.audienceModuleFirstRow}>

                    <CountryCity countryCity={audience} />
                    <AudienceType audienceInfo={audience} />
                </div>
            </>
        )
    }

    else {
        return (<div>Loading the Audience</div>)
    }
}

export default Audience;