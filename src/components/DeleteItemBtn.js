/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class DeleteItemBtn extends Component {
  constructor(props) {
    super(props);
  }

  removeItem = () => {};

  render() {
    return (
      <button id={this.props.idValue} onClick={this.removeItem}>
        X
      </button>
    );
  }
}

export default DeleteItemBtn;
