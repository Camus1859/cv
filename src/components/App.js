/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import MyTitle from './Title';

class App extends Component {
  constructor() {
    super();
  }


  render(){
    return (
      <div>
                <MyTitle />

        
      </div>
    )
  }
}

export default App