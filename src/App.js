import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grids from './components/Grids';
import Input from './components/Input';
import ResetButton from './components/ResetButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ResetButton />
        </div>
        <div>
          <Grids />
        </div>
        <div>
          <Input />
        </div>
      </header>
    </div>
  );
}

export default App;
