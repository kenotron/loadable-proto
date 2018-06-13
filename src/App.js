import React, { Component } from 'react';
import './App.css';
import { PrimaryButton } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();
class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          I'm a happy little button
          </p>
        <PrimaryButton menuProps={{
          items: [{
            key: 'abc',
            text: 'hi'
          }, {
            key: 'absdfc',
            text: 'hisdfsdfsd'
          }]
        }}>hello</PrimaryButton>
      </div>
    );
  }
}

export default App;
