import React, { useEffect, useState, useContext } from 'react'
import styles from './SearchBar.module.css'
import { GetInfluencerData, ChangeUsername } from '../../../API/GetInfluencerData';
import axios from 'axios';




const SearchBar = () => {

    const [username, setUsername] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [suggestion, setSuggestion] = useState(null);

    const [user, setUser] = useContext(ChangeUsername);

    let subMenu;

    const changeInfluencer = (userName) => {
        setSelectedUser(userName)
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
            <option key={key} value={elem} className={styles.influencerSuggestionList} />
        )
    }

    return (
        <div>
            <form className={styles.searchBarWrap}
                onSubmit={(e) => {
                    e.preventDefault();
                    changeInfluencer(username);
                    setUsername(null);
                }}>
                <input
                    list="influencer"
                    name="influencer"
                    placeholder="Search your influencer"
                    className={styles.inputElem}
                    onChange={(e) => setUsername(e.target.value)} />
                <datalist  id="influencer">
                    {subMenu}
                </datalist>
                
            </form>
        </div >
    )
}

export default SearchBar;