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
      <div className={educationSection.spaceEvenly}>
        <div className={educationSection.spaceLeft}>
          <div>{userData.university}</div>
          <div>
            {userData.fromDate}-{userData.toDate}
          </div>
        </div>
        <div className={educationSection.spaceLeft}>
          <div>{userData.degree}</div>
          <div>{userData.gpa} GPA</div>
        </div>
        <div className={educationSection.spaceLeftButton}>
          <DeleteItemBtn />
        </div>
      </div>
    );
  }
}

export default UserInfoEducation;
