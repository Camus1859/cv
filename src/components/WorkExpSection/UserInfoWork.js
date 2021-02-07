/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import workSection from '../../styles/workSectionStyles.module.css';
import DeleteItemBtn from '../DeleteItemBtn.js';

class UserInfoWork extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    const userData = this.props.data;
    

    return (
      <div className={workSection.spaceEvenly}>
        <div className={workSection.spaceLeft}>
          <div>{userData.company}</div>
          <div>
            {userData.from}-{userData.to}
          </div>
        </div>
        <div className={workSection.spaceLeft}>
          <div>{userData.city}</div>
          <div>{userData.role} </div>
        </div>
        <div >
        <div>{userData.description} </div>
        </div>
        <div className={workSection.spaceLeftButton}>
          <DeleteItemBtn />
        </div>
      </div>
    );
  }
}

export default UserInfoWork;
