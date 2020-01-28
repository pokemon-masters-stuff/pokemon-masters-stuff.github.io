import React from 'react';
// import './App.css';
import SyncGrids from './components/SyncGrids';
import GridData from './components/GridData';
import ActiveGridList from './components/ActiveGridList';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container container-s">
          <span className="navbar-brand mb-0 h1">Sync Grid Helper</span>
        </div>
      </nav>
      <div className="content">
        <div className="container container-s">
          <div className="row">
            <div className="col-sm-7">
              <div>
                <SyncGrids />
              </div>
              <div className="grid-data-display position-fixed">
                <GridData />
              </div>
            </div>
            <div className="col-sm-4 position-static mt-5">
              <ActiveGridList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
