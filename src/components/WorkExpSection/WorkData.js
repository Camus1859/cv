/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import WorkForm from './WorkForm';

class WorkData extends Component {
  constructor(props) {
    super(props);
  
  }
  render() {

    return (
      <div>
        <WorkForm
          handleChange={this.props.handleChange}
          formSubmit={this.props.formSubmit}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default WorkData;