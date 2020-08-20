import React, {useContext, useEffect} from 'react';
import { CountryCity, AudienceType, AudiencePersonnal } from './features'
import styles from './Audience.module.css';
import {GetInfluencerData} from '../API/GetInfluencerData';
import ReactLoading from 'react-loading';

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
        return (<div className='loading'><ReactLoading type={'cylon'} color={'#00CFFC'} height={'20%'} width={'20%'} /></div>)
    }
}

export default Audience;