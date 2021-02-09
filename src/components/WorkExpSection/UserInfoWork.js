/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import workSection from '../../styles/workSectionStyles.module.css';
import DeleteItemBtn from '../DeleteItemBtn.js';

class UserInfoWork extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('it works');

    const userData = this.props.data;

    return (
      <div>
        <div className={workSection.spaceEvenly}>
          <div className={workSection.spaceLeft}>
            <div>{userData.company}</div>
            {userData.from}-{userData.to}
          </div>
          <div>
            <div>{userData.city}</div>
            {userData.role}
          </div>
          <div>{userData.description}</div>
          <div  className={workSection.spaceRight}>
            <DeleteItemBtn />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfoWork;
