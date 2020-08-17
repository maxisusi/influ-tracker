import React from 'react';
import { MainBoard, Audience, Growth, SimilarAccount, SearchInfluencer } from './components';
import GetInfluencerData from './components/API/GetInfluencerData';

function App() {

  const API_DATA = GetInfluencerData();
  return (
    <div className="App">
      <div className="smallBoard">
        <SearchInfluencer />

      </div>

      <hr className="separationLine"/>
      <div className="board">

        <MainBoard avatar={API_DATA} />
        <Audience audience={API_DATA} />
        <Growth growth={API_DATA} />
        {/*<SimilarAccount accountData={API_DATA} />*/}
      </div>


    </div>
  );
}

export default App;
