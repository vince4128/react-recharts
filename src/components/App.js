import React, { Component } from 'react';
import logo from './logo.svg';
//import RawData from './RawData';
import City from './City';
import Measurement from './Measurements';

// provider Component
// https://github.com/wesbos/React-Context/blob/master/src/App.js

class App extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">          
            <h1>Dashboard stat</h1>            
          </header>
          {/*<City/>*/}
          <Measurement/>
          {/*<RawData/>*/}
        </div>
    );
  }
}

export default App;
