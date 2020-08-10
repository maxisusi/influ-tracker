import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GetInfluencerData = () => {

    const userName = 'cristiano';
    const API_KEY = `https://app.influenceye.com/api/v1/profile/findByUsername?apiKey=d3245b91-9442-8a52-de68-bb1e253bf807&network=instagram&username=${userName}`
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
