import React from 'react';
import Tetris from './components/Tetris';
import ReactGA from 'react-ga';

const TRACKING_ID = "299462649"; 
ReactGA.initialize(TRACKING_ID);
const App = () => (
  <div className="App">
    <Tetris />
  </div>
);

export default App;
