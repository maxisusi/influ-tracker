import React, {useContext} from 'react';
import { CountryCity, AudienceType, AudiencePersonnal } from './features'
import styles from './Audience.module.css';
import {GetInfluencerData} from '../API/GetInfluencerData';

const Audience = () => {

    const [avatar, setAvatar] = useContext(GetInfluencerData);

    if (avatar) {
        return (
            <>
                <h1 className="MainTitle">Audience</h1>
                <div className={styles.audienceModuleFirstRow}>

                    <CountryCity countryCity={avatar} />
                    <AudienceType audienceInfo={avatar} />
                </div>
                <div>
                    <AudiencePersonnal audiencePersonnal={avatar} />
                </div>
            </>
        )
    }

    else {
        return (<div>Loading the Audience</div>)
    }
}

export default Audience;