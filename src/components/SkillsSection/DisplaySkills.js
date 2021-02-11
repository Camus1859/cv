/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import DeleteItemBtn from '../DeleteItemBtn.js';
import skillSection from '../../styles/skillSectionStyles.module.css';

class DisplaySkills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((skill) => {
          return (
            <div className={skillSection.spaceEvenly}>
              <div className={skillSection.spaceLeft}>{skill}</div>

              <div className={skillSection.spaceRight}>
                <DeleteItemBtn />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplaySkills;
