/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';


class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = { fName: 'First Name', lName: 'Last Name', Occ: 'Occupation' };
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  

  render() {
    return (
      <div>
        <input
          type='text'
          name="fName"
          value={this.state.fName}
          onChange={this.handleChange}
        />
        <br></br>
        <input
          type='text'
          name="lName"
          value={this.state.lName}
          onChange={this.handleChange}

        />
        <br></br>
        <input
          type='text'
          name="Occ"
          value={this.state.Occ}
          onChange={this.handleChange}

        />
      </div>
    );
  }
}

export default UserName;
