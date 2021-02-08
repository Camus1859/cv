/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class DisplaySkills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const skills = this.props.data;

    return (
      <div>
        <div>{skills}</div>
      </div>
    );
  }
}

export default DisplaySkills;
