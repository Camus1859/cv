/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import MyTitle from './Title';
import Name from './Name';
import UserAddress from './Address';
import UserEducation from './Education';
import UserWorkExp from './WorkExp';
import UserSkills from './Skills';
import styles from '../styles/personalInfoStyles.module.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MyTitle />
        <div className={styles.backgroundColorPersonal}>
          <div className={styles.spacingPersonal}>
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
