/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import personalSection from '../styles/personalSectionStyles.module.css';


class UserAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'Address',
      townCity: 'Town/City',
      country: 'Country',
      zipCode: 'Zip Code',
      phone: 'Phone',
      email: 'Email',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <input className={personalSection.input}
          type='text'
          name='address'
          value={this.state.address}
          onChange={this.handleChange}
        />
        <br></br>

        <input className={personalSection.input}
          type='text'
          name='townCity'
          value={this.state.townCity}
          onChange={this.handleChange}
        />
        <br></br>

        <input className={personalSection.input}
          type='text'
          name='country'
          value={this.state.country}
          onChange={this.handleChange}
        />
        <br></br>

        <input className={personalSection.input}
          type='text'
          name='zipCode'
          value={this.state.zipCode}
          onChange={this.handleChange}
        />
        <br></br>

        <input className={personalSection.input}
          type='text'
          name='phone'
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <br></br>

        <input className={personalSection.input}
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br></br>
      </div>
    );
  }
}

export default UserAddress;
