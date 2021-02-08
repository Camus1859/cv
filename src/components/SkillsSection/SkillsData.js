/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import btn from '../../styles/btnStyles.module.css';

import DisplaySkills from './DisplaySkills';

class SkillsData extends Component {
  constructor(props) {
    super(props);
    this.state = { skills: [], showSkills: false };
  }

  handleChange = (e) => {
    this.setState({
      skills: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    e.target.closest('.submit').remove();

    this.setState({
      showSkills: true,
    });
  };

  render() {
    return (
      <div>
        <form type='submit' className='submit' onSubmit={this.formSubmit}>
          <input
            type='text'
            value={this.state.skills}
            onChange={this.handleChange}
          />
          <div className={btn.spaceApart}>
            <button type='submit'>Save</button>
            <button type='submit'>Cancel</button>
          </div>
        </form>
        {this.state.showSkills ? (
          <DisplaySkills data={this.state.skills} />
        ) : null}
      </div>
    );
  }
}

export default SkillsData;
