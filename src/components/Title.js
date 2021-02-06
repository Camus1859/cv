import React, { Component } from 'react';
import styles from "../styles/titleStyles.module.css";


class MyTitle extends Component {
  render() {
    return <h1 className={styles.title}>CV Builder</h1>;
  }
}

export default MyTitle;