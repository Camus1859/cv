/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import EducationForm from './EducationForm';

class EducationData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <EducationForm
          handleChange={this.props.handleChange}
          formSubmit={this.props.formSubmit}
          data={this.props.data}
        />
      </div>
    );

  }
}

export default EducationData;
