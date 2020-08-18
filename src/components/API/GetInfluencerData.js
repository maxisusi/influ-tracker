import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SearchInfluencer from '../SearchInfluencer/SearchInfluencer';

export const influencerUsername = (data) => {

    let userName = 'cristiano'

    if(data)
        userName = data;

    const API_KEY = `https://app.influenceye.com/api/v1/profile/findByUsername?apiKey=d3245b91-9442-8a52-de68-bb1e253bf807&network=instagram&username=${userName}`
    console.log(API_KEY)
    
    return API_KEY;

}


const GetInfluencerData = () => {

    const API_KEY = influencerUsername();
    console.log(API_KEY);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        axios.get(API_KEY)
            .then(response =>
                setAvatar(response.data))

            .catch(error => console.log(error))
    }, [API_KEY])

    return avatar;

}


export default GetInfluencerData;

