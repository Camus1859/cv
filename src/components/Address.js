/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';


class UserAddress extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <p>Address</p>
        <p>Town/City</p>
        <p>Country</p>
        <p>Zip Code</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
    )
  }

}

export default UserAddress