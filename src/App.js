import React, { Component } from 'react';
import MouseAround from './pages/MouseAround';
import Counters from './pages/Counters';

class App extends Component {
  render() { 
    return ( 
      <div>
        <MouseAround />
        <Counters />
      </div>
     );
  }
}
export default App;