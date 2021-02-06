/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Btns from './SaveCancelBtn';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log(this.state.count);
    return (
      <div>
        <Btns idValue={this.state.count} increaseCounter={this.increaseCounter} />
      </div>
    );
  }
}

export default Counter;
