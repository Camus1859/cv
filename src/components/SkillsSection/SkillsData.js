/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import btn from '../../styles/btnStyles.module.css';

import DisplaySkills from './DisplaySkills';

class SkillsData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className='submit' onSubmit={this.props.formSubmit}>
          <input className='input'
            type='text'
            value={this.props.skill}
            onChange= {this.props.handleChange}
          />
          <div className={btn.spaceApart}>
            <button type='submit'>Save</button>
            <button type='submit'>Cancel</button>
          </div>
          {this.props.showSkills ? (
          <DisplaySkills data={this.props.skills} />
        ) : null}
        </form>
       
      </div>
    );
  }
}

export default SkillsData;
