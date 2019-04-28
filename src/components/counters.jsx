import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() { 
    const { onDelete, onIncrement, counters, onReset } = this.props;
    return ( 
    <div>
      <button
      className="badge badge-primary m-2"
      onClick={onReset}
      >Reset</button>
      {counters.map(counter => 
        <Counter
        key={counter.id}
        counter={counter}
        onDelete={onDelete}
        onIncrement={onIncrement}
        />
      )}
    </div> 
    );
  }
}
 
export default Counters;