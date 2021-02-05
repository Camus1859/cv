/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Btns from './SaveCancelBtn';

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
        <form type='submt' onSubmit={this.formSubmit}>
          <label>Name of University or School:</label>
          <br></br>
          <input 
            type='text'
            name='university'
            value={this.state.university}
            onChange={this.handleChange}
            placeholder='Enter University Name'
          />
          <br></br>
          <label>From:</label> <br></br>
          <input
            type='text'
            name='fromDate'
            value={this.state.fromDate}
            onChange={this.handleChange}
            placeholder='YYYY'
          />
          <br></br>
          <label>To:</label>
          <br></br>
          <input
            type='text'
            name='toDate'
            value={this.state.toDate}
            onChange={this.handleChange}
            placeholder='YYYY'
          />
          <br></br>
          <label>Degree:</label> <br></br>
          <input
            type='text'
            name='degree'
            value={this.state.degree}
            onChange={this.handleChange}
            placeholder='Enter Degree '
          />
          <br></br>
          <label>GPA:</label>
          <br></br>
          <input
            type='text'
            name='gpa'
            value={this.state.gpa}
            onChange={this.handleChange}
            placeholder='Enter GPA'
          />
          <br></br>
        </form>
        <Btns usersData={this.state}/>
      </div>
    );
  }
}

export default EducationData;
