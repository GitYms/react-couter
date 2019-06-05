import React, { Component } from 'react';
import Counters from '../components/counters';

class App extends Component {
  state = { 
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
   }
   handleDelete = (counterId) => {
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({ counters });
   } 
   handleIncrement = (counter) => {
     const counters = this.state.counters.map(c => {
      if (c.id === counter.id) c.value += 1;
      return c;
     });
     this.setState({ counters });
   }
   handleReset = () => {
     const counters = this.state.counters.map(c => { c.value = 0; return c });
     this.setState({ counters });
   }
  render() { 
    return ( 
      <div>
        <h1>basic react stateful component practice</h1>
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
        />
      </div>
     );
  }
}
export default App;