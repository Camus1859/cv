/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import WorkForm from './WorkForm';

class WorkData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      city: '',
      from: '',
      to: '',
      role: '',
      description: '',
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
        <WorkForm
          handleChange={this.handleChange}
          formSubmit={this.formSubmit}
          data={this.state}
        />
      </div>
    );
  }
}

export default WorkData;