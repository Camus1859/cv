/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import DeleteItemBtn from '../DeleteItemBtn.js';
import skillSection from '../../styles/skillSectionStyles.module.css';

class DisplaySkills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const skills = this.props.data;

    return (
      <div className={skillSection.spaceEvenly}>
        <div className={skillSection.spaceLeft}>{skills}</div>

        <div className={skillSection.spaceRight}> <DeleteItemBtn /></div>
      </div>
    );
  }
}

export default DisplaySkills;
