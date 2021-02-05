/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import btn from '../styles/btnStyles.module.css';
import UserInfo from './UserInfo';

class Btns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  onClickDisplayUserInfo = (e) => {
    this.setState({
      showComponent: true,
    });
    console.log('removed div')
    e.target.parentElement.parentElement.remove()
  };

  render() {
    const { university, fromDate, toDate, degree, gpa } = this.props.usersData;
    return (
      <div className={btn.spaceApart}>
        <button onClick={this.onClickDisplayUserInfo}>Save</button>
        {this.state.showComponent ? (
          <UserInfo data={[university, fromDate, toDate, degree, gpa]} />
        ) : null}
        <button>Cancel</button>
      </div>
    );
  }
}

export default Btns;
