import React, { useState } from 'react'
import styles from '../MainBoard.module.css';

const Avatar = ({ avatarName }) => {

    const { userName, fullName, locationShowName, picture, verified } = avatarName;
    let [checked, isChecked] = useState(verified);

    const interest = avatarName.audienceStatistics.audienceInterestsCategories;
    const interestElementCount = 9;
    if (interest.length > interestElementCount) {
        interest.length = interestElementCount;
    }
    let interestElem = interest.map((elem, key) => (
        <li key={key}>
            {elem.category}
        </li>
    ))

    return (
        <>
            <div className={styles.avatarComp}>
                <div className={styles.avatar}>
                    <div>
                        <div className={styles.avatarImg} style={{ 'backgroundImage': `url('${picture}')` }}></div>
                    </div>
                    <div className={styles.avatarDatas}>
                        <div className={styles.avatarIGDatas}>
                            <div className={styles.igName}>
                                <p style={{ color: checked ? '#00CFFC' : '#FFFFFF' }}>@{userName}</p>
                                <svg style={{ display: checked ? '' : 'none' }} xmlns="http://www.w3.org/2000/svg" width="12.9" height="12.9" viewBox="0 0 11.101 11.01">
                                    <path id="iconmonstr-check-mark-6" d="M10.792,5.584a1.076,1.076,0,0,1-.182-1.261A1.076,1.076,0,0,0,9.9,2.767,1.075,1.075,0,0,1,9.065,1.8,1.076,1.076,0,0,0,7.626.88,1.075,1.075,0,0,1,6.4.521a1.076,1.076,0,0,0-1.711,0A1.072,1.072,0,0,1,3.473.881a1.075,1.075,0,0,0-1.439.925,1.075,1.075,0,0,1-.834.962,1.075,1.075,0,0,0-.71,1.555A1.077,1.077,0,0,1,.308,5.584,1.075,1.075,0,0,0,.551,7.277a1.075,1.075,0,0,1,.529,1.159A1.075,1.075,0,0,0,2.2,9.728a1.076,1.076,0,0,1,1.072.689,1.076,1.076,0,0,0,1.641.482,1.074,1.074,0,0,1,1.274,0,1.076,1.076,0,0,0,1.641-.482A1.075,1.075,0,0,1,8.9,9.728a1.075,1.075,0,0,0,1.12-1.292,1.075,1.075,0,0,1,.53-1.159,1.075,1.075,0,0,0,.243-1.693ZM4.972,8.1,2.89,6.077l.859-.859L4.972,6.378,7.582,3.7l.859.859Z" transform="translate(0.001 -0.098)" fill="#00cffc" />
                                </svg>
                            </div>
                            <div className={styles.igLocation}>
                                <p>{locationShowName}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 7.069 10.603">
                                    <path id="iconmonstr-location-1" d="M7.534,0A3.513,3.513,0,0,0,4,3.358C4,5.213,5.533,7.427,7.534,10.6c2-3.176,3.534-5.39,3.534-7.244A3.513,3.513,0,0,0,7.534,0Zm0,4.86A1.325,1.325,0,1,1,8.86,3.534,1.325,1.325,0,0,1,7.534,4.86Z" transform="translate(-4)" fill="#b0b6bb" />
                                </svg>

                            </div>
                        </div>
                        <h1>{fullName}</h1>
                    </div>
                    

                </div>
                <div>
                        <ul className={styles.avatarInterest}>
                            {interestElem}
                        </ul>
                    </div>
            </div>
        </>
    )
}

export default Avatar;
