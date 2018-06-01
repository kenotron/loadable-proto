import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PrimaryButton} from 'office-ui-fabric-react';
import {initializeIcons} from '@uifabric/icons';
initializeIcons();
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          <PrimaryButton menuProps={{
            items: [{
              key: 'abc',
              text: 'hi'
            },{
              key: 'absdfc',
              text: 'hisdfsdfsd'
            }]
          }}>hello</PrimaryButton>
        </p>
      </div>
    );
  }
}

export default App;
