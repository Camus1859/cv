/* eslint-disable no-useless-constructor */
import React,  { Component } from "react";

class UserName extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <div>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Occupation</p>
      </div>
    )
  }
}

export default UserName