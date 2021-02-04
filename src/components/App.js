/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import MyTitle from './Title';
import Name from './Name';
import UserAddress from './Address';
import UserEducation from './Education'
import styles from '../styles/addressStyles.module.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MyTitle />
        <div className={styles.breakLine}>
          <div className={styles.personal}>
            <Name />
            <UserAddress />
          </div>
          <hr></hr>
          <UserEducation />

        </div>
      </div>
    );
  }
}

export default App;
