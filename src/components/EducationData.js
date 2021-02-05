/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import EducationForm from './EducationForm';

class EducationData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: '',
      fromDate: '',
      toDate: '',
      degree: '',
      gpa: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({
      university: this.state.university,
      fromDate: this.state.fromDate,
      toDate: this.state.toDate,
      degree: this.state.degree,
      gpa: this.state.gpa,
    });
  };

  render() {
    return (
      <div>
        <EducationForm handleChange={this.handleChange} formSubmit={this.formSubmit} data={this.state} />
      </div>
    );
  }
}

export default EducationData;
