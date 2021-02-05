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
    if (e.target.parentElement.id === 'hide') {
      e.target.parentElement.id = `${btn.hidden}`;
      e.target.parentElement.parentElement.previousElementSibling.remove();
    }
  };

  render() {
    const { university, fromDate, toDate, degree, gpa } = this.props.usersData;
    return (
      <div>
        <div id='hide' className={btn.spaceApart}>
          <button onClick={this.onClickDisplayUserInfo}>Save</button>
          <button>Cancel</button>
        </div>

        <div>
          {this.state.showComponent ? (
            <UserInfo data={[university, fromDate, toDate, degree, gpa]} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Btns;
