import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

setTimeout(() => {
    if (window.performance) {
        let performance = window.performance;
        let performanceEntries = performance.getEntriesByType('paint');
        performanceEntries.forEach( (performanceEntry, i, entries) => {
          console.log("The time to " + performanceEntry.name + " was " + performanceEntry.startTime + " milliseconds.");
        });
      } else {
        console.log('Performance timing isn\'t supported.');
      }
}, 500);