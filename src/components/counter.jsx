import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 }
  constructor() {
    super();
  }
  handleIncrement = (e) => {
    const value = this.state.count + 1;
    this.setState({ count: value });
  }
  render() { 
    return ( 
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
        className="badge m-2 badge-primary"
        onClick={ () => { this.handleIncrement({ id: 1 }); }}
        >Increment</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const number = this.state.count === 0 ? 'Zero' : this.state.count;
    return <span>{number}</span>
  }
}


 
export default Counter;