import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import styles from './SearchInfluencer.module.css';
import { GetInfluencerData, ChangeUsername } from '../API/GetInfluencerData';
const SearchInfluencer = () => {

    const [username, setUsername] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [suggestion, setSuggestion] = useState(null);

    const [user, setUser] = useContext(ChangeUsername);

    let subMenu;

    const changeInfluencer = (e) => {
        setSelectedUser(e.target.innerText)
        e.target.value = '';
    }

    const changeInfluencerEnter = (e) => {
        setSelectedUser(username)
    }

    useEffect(() => {
        setUser(selectedUser);
    }, [selectedUser])

    useEffect(() => {
        const apiCall = `https://app.influenceye.com/api/v1/searchAdvanced/getSuggestions?apiKey=d3245b91-9442-8a52-de68-bb1e253bf807&suggestionType=MENTIONED_USER_NAMES&query=${username}`;
        axios.get(apiCall)
            .then(response => setSuggestion(response.data))
            .catch(error => console.log(error))

    }, [username])

    if (username) {
        subMenu = suggestion.map((elem, key) =>
            <li key={key}>{elem}</li>
        )
    }

    return (

        <div className={styles.searchWrapper}>
            <div className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="35" height="35" viewBox="0 0 27.661 31.735">
                    <defs>
                        <linearGradient id="linear-gradient" x1="0.352" y1="0.279" x2="0.693" y2="0.794" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#6efffe" />
                            <stop offset="1" stopColor="#eca1fb" />
                        </linearGradient>
                    </defs>
                    <path id="Path_2" data-name="Path 2" d="M879.281,126.234l5.624-3.075.11-.189h.1l-.052-.09a1.252,1.252,0,0,0-.026-1.208l-4.191-7.26a1.255,1.255,0,0,0-1.084-.626h-16.72l-.052-.089-.052.09a1.256,1.256,0,0,0-1,.58h-.1l.051.089-4.167,7.218a1.255,1.255,0,0,0,0,1.25l5.7,9.913-5.506,3.079-.174.238h-.1l.049.085-.082.2a1.246,1.246,0,0,0-.06.381,1.2,1.2,0,0,0,.066.391l.005.039.1.195,4.193,7.262a1.258,1.258,0,0,0,1.084.626h16.715l.054.094.055-.1a1.256,1.256,0,0,0,1-.58h.1l-.052-.089,4.167-7.218a1.254,1.254,0,0,0,0-1.252Zm-15.565,16.6-2.748-4.76h8.352l-.97-1.709a1.238,1.238,0,0,0-.078-.164l-.949-1.643-.193-.34v0L860.246,122.3l2.748-4.76,14.6,25.3Zm16.049-1.251-14.6-25.3h13.882l2.748,4.76h-8.348l.962,1.694a1.212,1.212,0,0,0,.084.181l4.193,7.264,3.832,6.637Z" transform="translate(-857.548 -113.696)" fill="url(#linear-gradient)" />
                </svg>
            </div>
            <div className={styles.searchElements}>
                <form className={styles.searchBarWrap} onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Search your influencer" className={styles.inputElem}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }} />

                    <ul className={styles.menuSuggestion} onClick={(e) => { changeInfluencer(e); setUsername(null) }}>
                        {subMenu}
                    </ul>

                </form>

                {/* <button className={styles.buttonSearch}>search</button> */}
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 43 43">
                    <g id="Group_5" data-name="Group 5" transform="translate(-1425.357 -12.357)">
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="21.5" cy="21.5" r="21.5" transform="translate(1425.357 12.357)" fill="#606d77" />
                        <path id="iconmonstr-user-6" d="M9.516,1.586A3.965,3.965,0,1,1,5.551,5.552,3.97,3.97,0,0,1,9.516,1.586ZM9.516,0a5.551,5.551,0,1,0,5.551,5.552A5.551,5.551,0,0,0,9.516,0Zm5.05,10.589a7.182,7.182,0,0,1-1.315,1.032,10.135,10.135,0,0,1,3.943,5.825H1.821a9.809,9.809,0,0,1,3.943-5.835,7.143,7.143,0,0,1-1.315-1.04A11.663,11.663,0,0,0,0,19.031H19.031A11.914,11.914,0,0,0,14.566,10.589Z" transform="translate(1437.707 23.243)" fill="#fff" />
                    </g>
                </svg>

            </div>

        </div >
    )
}

export default SearchInfluencer;