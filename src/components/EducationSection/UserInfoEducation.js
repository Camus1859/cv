/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import educationSection from '../../styles/educationSectionStyles.module.css';
import DeleteItemBtn from '../DeleteItemBtn.js';

class UserInfoEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    const userData = this.props.data;

    return (
      <div>
        <div className={educationSection.spaceEvenly}>
          <div className={educationSection.spaceLeft}>
            <div>{userData.university}</div>
            {userData.fromDate}-{userData.toDate}
          </div>

          <div>
            <div>{userData.degree}</div>
            {userData.gpa} GPA
          </div>

          <div className={educationSection.spaceRight}>
            <DeleteItemBtn />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfoEducation;
