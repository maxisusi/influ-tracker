import React from 'react';
import { MainBoard, Audience, Growth, SimilarAccount, SearchInfluencer } from './components';
import { GetInfluencerProvider } from './components/API/GetInfluencerData';

function App() {

  return (

    <GetInfluencerProvider>
      <div className="App">

        <div className="smallBoard">

          <SearchInfluencer />
        </div>

        <hr className="separationLine" />
        <div className="board">

          <MainBoard />
          <Audience />
          <Growth />
          {/*<SimilarAccount accountData={API_DATA} />*/}

        </div>


      </div>

    </GetInfluencerProvider>
  );
}

export default App;
