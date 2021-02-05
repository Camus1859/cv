/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userData = this.props.data;
    console.log('add data');

    return (
      <div>
        {userData.map((data, index) => {
          return <p key={index}>{data}</p>;
        })}
      </div>
    );
  }
}

export default UserInfo;
