import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios';

export const GetInfluencerData = createContext();
export const ChangeUsername = createContext();

export const GetInfluencerProvider = props => {


    const [avatar, setAvatar] = useState(null);
    const [user, setUser] = useState('tootatis');


    const API_KEY = `https://app.influenceye.com/api/v1/profile/findByUsername?apiKey=d3245b91-9442-8a52-de68-bb1e253bf807&network=instagram&username=${user}`
    const [apiKey, setApiKey] = useState(API_KEY);

    useEffect(() => {
        setApiKey(API_KEY)
    }, [user])

    useEffect(() => {
        axios.get(apiKey)

            .then(response =>
                setAvatar(response.data))
            .catch(error => console.log('This is the error: ' + error))
    }, [apiKey])

    return (
        <GetInfluencerData.Provider value={[avatar, setAvatar]}>
            <ChangeUsername.Provider value={[user, setUser]}>
                {props.children}
            </ChangeUsername.Provider>
        </GetInfluencerData.Provider>
    );

}




