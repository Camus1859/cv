/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';


class UserEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Education</p>
        <button>
          <i className='fa fa-plus-circle' aria-hidden='true'></i>
          Add

        </button>
      </div>
    );
  }
}

export default UserEducation
