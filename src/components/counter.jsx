import React, { Component } from 'react';

class Counter extends Component {
  render() { 
    const { onDelete, onIncrement, counter } = this.props;
    return ( 
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
        className="badge m-2 badge-primary"
        onClick={() => {onIncrement(counter)}}
        >Increment</button>
        <button
        className="badge badge-danger m-2"
        onClick={() => {onDelete(counter.id)}}
        >删除</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const number = this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    return <span>{number}</span>
  }
}


 
export default Counter;