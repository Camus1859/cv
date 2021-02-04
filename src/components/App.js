/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import MyTitle from './Title';
import Name from './Name';
import UserAddress from './Address';
import UserEducation from './Education';
import UserWorkExp from './WorkExp';
import UserSkills from './Skills';
import body from '../styles/bodyStyles.module.css';
import personalSection from '../styles/personalSectionStyles.module.css';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MyTitle />
        <div className={body.backgroundColor}>
          <div className={personalSection.spacing}>
            <Name />
            <UserAddress />
          </div>
          <hr></hr>
          <UserEducation />
          <hr></hr>
          <UserWorkExp />
          <hr></hr>
          <UserSkills />
        </div>
      </div>
    );
  }
}

export default App;
