/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import WorkData from './WorkData';

class UserWorkExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workData: {
        company: '',
        city: '',
        from: '',
        to: '',
        role: '',
        description: '',
      },
      workDataHolder: [],
      value: [],
      count: 0,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      let workData = { ...prevState.workData };
      workData[name] = value;
      return {
        workData,
      };
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const workData = { ...this.state.workData };
    this.setState({
      workDataHolder: [...this.state.workDataHolder, workData],
    });
  };

  onClickAddtoCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  displayForm = () => {
    let forms = [];
    for (let i = 0; i < this.state.count; i++) {
      forms.push(
        <div key={i}>
          {
            <WorkData
              handleChange={this.handleChange}
              formSubmit={this.formSubmit}
              data={this.state}
            />
          }
        </div>
      );
    }
    return forms.length === 0 ? '' : forms;
  };

  render() {
    console.log(this.state.workDataHolder)
    return (
      <div className='section-name'>
        <h2>Work Experience</h2>

        {this.displayForm()}
        <button onClick={this.onClickAddtoCount}>
          <i className='fa fa-plus-circle' aria-hidden='true'></i>
          Add
        </button>
      </div>
    );
  }
}

export default UserWorkExp;
