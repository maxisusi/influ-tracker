import React from 'react'
import styles from '../MainBoard.module.css';

const Scoreboard = ({ scoring }) => {

    const { influenceyeRating, audienceStatistics } = scoring;

    return (
        <div className={styles.scoreBoard}>
            <ul>
                <li className={styles.scoreElem}>

                    <div className={styles.scoreWrapper}>
                        <div className={styles.scoreInfo}>
                            <div className={styles.scoreIMG}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 28 28">
                                    <path id="iconmonstr-hashtag-1" d="M28.425,11.182,29,8.636H22.173L23.909,1H21.364L19.628,8.636H13.264L15,1H12.455L10.719,8.636H2.848l-.575,2.545h7.868L8.4,18.818H1.583L1,21.364H7.827L6.091,29H8.636l1.736-7.636h6.364L15,29h2.545l1.736-7.636h7.872l.574-2.545H19.859L21.6,11.182ZM17.314,18.818H10.95l1.736-7.636H19.05Z" transform="translate(-1 -1)" fill="#b0b6bb" />
                                </svg>
                            </div>

                            <div className={styles.scoreTitleWrapper}>
                                <h2 className={styles.scoreTitle}>Rating</h2>
                                <p className={styles.scoreSubTitle}>Rating of the influence</p>
                            </div>
                        </div>
                        <h3 className={styles.scoreResult}>{influenceyeRating.toFixed()}/100</h3>
                    </div>

                </li>

                <li className={styles.scoreElem}>

                    <div className={styles.scoreWrapper}>
                        <div className={styles.scoreInfo}>
                            <div className={styles.scoreIMG}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 30.286 30.286">
                                    <path id="iconmonstr-globe-thin" d="M14.668,0a14.644,14.644,0,1,1-.048,0h.048Zm4.508,19.524H10.112c.78,5.206,2.736,8.542,4.531,8.542s3.752-3.336,4.532-8.542m7.974,0H20.41c-.52,3.642-1.612,6.592-3.032,8.262a13.454,13.454,0,0,0,9.772-8.262m-18.272,0H2.137a13.458,13.458,0,0,0,9.773,8.262c-1.42-1.671-2.513-4.62-3.032-8.262m-.15-8.542h-7a13.476,13.476,0,0,0,0,7.322h7a36.389,36.389,0,0,1,0-7.322m10.605,0H9.955a34.92,34.92,0,0,0,0,7.322h9.378a34.924,34.924,0,0,0,0-7.322m8.227,0h-7a36.148,36.148,0,0,1,0,7.322h7a13.474,13.474,0,0,0,0-7.322M11.91,1.5A13.458,13.458,0,0,0,2.137,9.762H8.877C9.4,6.12,10.489,3.169,11.91,1.5m7.265,8.262C18.4,4.556,16.439,1.22,14.643,1.22s-3.751,3.336-4.531,8.542ZM17.378,1.5C18.8,3.169,19.89,6.12,20.41,9.762h6.74A13.454,13.454,0,0,0,17.378,1.5" transform="translate(0.5 0.5)" fill="#b0b6bb" stroke="#b0b6bb" strokeWidth="1" fillRule="evenodd" />
                                </svg>

                            </div>

                            <div className={styles.scoreTitleWrapper}>
                                <h2 className={styles.scoreTitle}>Country</h2>
                                <p className={styles.scoreSubTitle}>Audience Country</p>
                            </div>
                        </div>
                        <h3 className={styles.scoreResult}>{audienceStatistics.countries[0].showName}</h3>
                    </div>

                </li>
                
                <li className={styles.scoreElem}>

                    <div className={styles.scoreWrapper}>
                        <div className={styles.scoreInfo}>
                            <div className={styles.scoreIMG}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 30.286 30.286">
                                    <path id="iconmonstr-globe-thin" d="M14.668,0a14.644,14.644,0,1,1-.048,0h.048Zm4.508,19.524H10.112c.78,5.206,2.736,8.542,4.531,8.542s3.752-3.336,4.532-8.542m7.974,0H20.41c-.52,3.642-1.612,6.592-3.032,8.262a13.454,13.454,0,0,0,9.772-8.262m-18.272,0H2.137a13.458,13.458,0,0,0,9.773,8.262c-1.42-1.671-2.513-4.62-3.032-8.262m-.15-8.542h-7a13.476,13.476,0,0,0,0,7.322h7a36.389,36.389,0,0,1,0-7.322m10.605,0H9.955a34.92,34.92,0,0,0,0,7.322h9.378a34.924,34.924,0,0,0,0-7.322m8.227,0h-7a36.148,36.148,0,0,1,0,7.322h7a13.474,13.474,0,0,0,0-7.322M11.91,1.5A13.458,13.458,0,0,0,2.137,9.762H8.877C9.4,6.12,10.489,3.169,11.91,1.5m7.265,8.262C18.4,4.556,16.439,1.22,14.643,1.22s-3.751,3.336-4.531,8.542ZM17.378,1.5C18.8,3.169,19.89,6.12,20.41,9.762h6.74A13.454,13.454,0,0,0,17.378,1.5" transform="translate(0.5 0.5)" fill="#b0b6bb" stroke="#b0b6bb" strokeWidth="1" fillRule="evenodd" />
                                </svg>

                            </div>

                            <div className={styles.scoreTitleWrapper}>
                                <h2 className={styles.scoreTitle}>Country</h2>
                                <p className={styles.scoreSubTitle}>Audience Country</p>
                            </div>
                        </div>
                        <h3 className={styles.scoreResult}>{audienceStatistics.countries[0].showName}</h3>
                    </div>

                </li>



            </ul>
        </div>
    )
}

export default Scoreboard;