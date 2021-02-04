/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import EducationForm from "./EducationForm";

class UserEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    }
  }

  onClickDisplayEducationForm = () => {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <p>Education</p>
        <button onClick={this.onClickDisplayEducationForm} >
          <i className='fa fa-plus-circle' aria-hidden='true'></i>
          Add
        </button>
        {this.state.showComponent ?  <EducationForm /> : null}
      </div>
    );
  }
}

export default UserEducation;
