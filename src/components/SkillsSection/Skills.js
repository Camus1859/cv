/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import SkillsData from './SkillsData';

class UserSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: '',
      skills: [],
      showSkills: false,
      value: [],
      count: 0,
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      skill: value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    //const value = e.target.firstElementChild.value;

   // e.target.closest('.submit').remove();
    this.setState({
      showSkills: true,
      skills: [...this.state.skills, this.state.skill],
      skill: '',
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
      console.log('abc')
      forms.push(
        <div key={i}>
          <SkillsData
            formSubmit={this.formSubmit}
            skills={this.state.skills}
            handleChange={this.handleChange}
            showSkills={this.state.showSkills}
          />
        </div>
      );
    }

    return forms.length === 0 ? '' : forms;

  };

  render() {
    return (
      <div className='section-name'>
        <h2>Skills</h2>

        {this.displayForm()}
        <button onClick={this.onClickAddtoCount}>
          <i className='fa fa-plus-circle' aria-hidden='true'></i>
          Add
        </button>
      </div>
    );
  }
}

export default UserSkills;
