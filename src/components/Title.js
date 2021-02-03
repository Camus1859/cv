import React, { Component } from 'react';
import styles from "../styles/titleStyles.module.css";


class MyTitle extends Component {
  render() {
    return <div className={styles.title}>CV Builder</div>;
  }
}

export default MyTitle;