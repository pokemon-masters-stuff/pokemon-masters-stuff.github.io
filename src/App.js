import React from 'react';
// import './App.css';
import SyncGrids from './components/SyncGrids';
import GridData from './components/GridData';
import ActiveGridList from './components/ActiveGridList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">
            Pokemon Masters - Sync Grid Helper
          </span>
        </nav>
        <div className="row">
          <div className="col-sm-8">
            <div>
              <SyncGrids />
            </div>
            <div>
              <GridData />
            </div>
          </div>
          <div className="col-sm-4">
            <ActiveGridList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
