/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import btn from '../styles/btnStyles.module.css';
import UserInfoEducation from './EducationSection/UserInfoEducation';
import UserInfoWork from './WorkExpSection/UserInfoWork';

class Btns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponentUserInfoEducation: false,
      showComponentUserInfoWork: false
    };
  }

  onClickDisplayUserInfo = (e) => {
    if (e.target.parentElement.id === 'hide') {
      e.target.parentElement.id = `${btn.hidden}`;
      e.target.parentElement.parentElement.previousElementSibling.remove();
    }

    if (e.target.closest('.h2').firstElementChild.textContent === 'Education') {
      this.setState({
        showComponentUserInfoEducation: true,
        showComponentUserInfoWork: false
      })

    }

    if (
      e.target.closest('.h2').firstElementChild.textContent ===
      'Work Experience'
    ) {
      this.setState({
        showComponentUserInfoEducation: false,
        showComponentUserInfoWork: true,
      })

    }
  };

  decideSectionClicked = () => {};

  render() {
    return (
      <div>
        <div id='hide' className={btn.spaceApart}>
          <button onClick={this.onClickDisplayUserInfo}>Save</button>
          <button>Cancel</button>
        </div>

        <div>
          {this.state.showComponentUserInfoEducation ? (
            <UserInfoEducation data={this.props.usersData} />
          ) : null}
        </div> 

          <div>
          {this.state.showComponentUserInfoWork ? (
            <UserInfoWork data={this.props.usersData} />
          ) : null}
        </div>  
      </div>
    );
  }
}

export default Btns;
