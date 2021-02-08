/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import EducationData from './EducationData';

class UserEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      count: 0
    };
  }

  onClickAddtoCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  displayForm = ()  =>{
    let forms = []
    for (let i = 0; i < this.state.count; i++) {
      forms.push(
        <div key={i}>
          <EducationData />

        </div>
      )
    }
    return forms.length === 0 ? '' : forms
  }

  render() {
    return (
      <div className="section-name">
        <h2 >Education</h2>
        
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
