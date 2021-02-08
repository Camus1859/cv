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
      company: this.state.company,
      city: this.state.city,
      from: this.state.from,
      to: this.state.to,
      role: this.state.role,
      description: this.state.description
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