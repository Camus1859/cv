/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Btns from '../SaveCancelBtn';

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { university, fromDate, toDate, degree, gpa } = this.props.data;
    return (
      <div>
        <form type='submt' onSubmit={this.props.formSubmit}>
          <label>Name of University or School:</label>
          <br></br>
          <input
            type='text'
            name='university'
            value={university}
            onChange={this.props.handleChange}
            placeholder='Enter University Name'
          />
          <br></br>
          <label>From:</label> <br></br>
          <input
            type='text'
            name='fromDate'
            value={fromDate}
            onChange={this.props.handleChange}
            placeholder='YYYY'
          />
          <br></br>
          <label>To:</label>
          <br></br>
          <input
            type='text'
            name='toDate'
            value={toDate}
            onChange={this.props.handleChange}
            placeholder='YYYY'
          />
          <br></br>
          <label>Degree:</label> <br></br>
          <input
            type='text'
            name='degree'
            value={degree}
            onChange={this.props.handleChange}
            placeholder='Enter Degree '
          />
          <br></br>
          <label>GPA:</label>
          <br></br>
          <input
            type='text'
            name='gpa'
            value={gpa}
            onChange={this.props.handleChange}
            placeholder='Enter GPA'
          />
          <br></br>
        </form>
        <Btns usersData={this.props.data} />
      </div>
    );
  }
}

export default EducationForm;
