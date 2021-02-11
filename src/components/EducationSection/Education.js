/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import EducationData from './EducationData';

class UserEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationData: {
        university: '',
        fromDate: '',
        toDate: '',
        degree: '',
        gpa: '',
      },
      educationDataHolder: [],
      value: [],
      count: 0,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      let educationData = { ...prevState.educationData };
      educationData[name] = value;
      return {
        educationData,
      };
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const educationData = { ...this.state.educationData };
    this.setState({
      educationDataHolder: [...this.state.educationDataHolder, educationData],
    });
  };

  onClickAddtoCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  displayForm = () => {
    let forms = [];
    for (let i = 0; i < this.state.count; i++) {
      forms.push(
        <div key={i}>
          <EducationData
            handleChange={this.handleChange}
            formSubmit={this.formSubmit}
            data={this.state}
          />
        </div>
      );
    }
    return forms.length === 0 ? '' : forms;
  };

  render() {
    console.log(this.state.educationDataHolder);
    return (
      <div className='section-name'>
        <h2>Education</h2>
        {this.displayForm()}
        <button onClick={this.onClickAddtoCount}>
          <i className='fa fa-plus-circle' aria-hidden='true'></i>
          Add
        </button>
      </div>
    );
  }
}

export default UserEducation;
