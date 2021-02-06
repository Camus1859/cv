/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class UserWorkExp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        <button>
          <i className='fa fa-plus-circle' aria-hidden='true'></i>
          Add
        </button>
      </div>
    );
  }
}

export default UserWorkExp