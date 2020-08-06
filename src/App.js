import React from 'react';
import { MainBoard, Audience } from './components';
import GetInfluencerData from './components/API/GetInfluencerData';

function App() {

  const API_DATA = GetInfluencerData();
  return (
    <div className="App">
      <div className="board">
        <MainBoard avatar={API_DATA} />
        <Audience audience={API_DATA} />

      </div>


    </div>
  );
}

export default App;
