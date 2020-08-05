import React from 'react';
import GetInfluencerData from './components/API/GetInfluencerData';
import { MainBoard, Audience} from './components';

function App() {
  return (
    <div className="App">
      <div className="board">
        <MainBoard avatar={GetInfluencerData()}/>
        <Audience audience={GetInfluencerData()}/>
      </div>


    </div>
  );
}

export default App;
