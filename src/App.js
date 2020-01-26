import React from 'react';
import './App.css';
import SyncGrids from './components/SyncGrids';
import GridData from './components/GridData';
import ResetButton from './components/ResetButton';
import ActiveGridList from './components/ActiveGridList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ResetButton />
        </div>
        <div>
          <SyncGrids />
        </div>
        <div>
          <GridData />
        </div>
        <div>
          <ActiveGridList />
        </div>
      </header>
    </div>
  );
}

export default App;
