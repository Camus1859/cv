/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import btn from '../styles/btnStyles.module.css';


class Btns extends Component {
  constructor(props){
    super(props)
  }



  render(){
    return(
      <div className={btn.spaceOut}>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    )
  }
}

export default Btns