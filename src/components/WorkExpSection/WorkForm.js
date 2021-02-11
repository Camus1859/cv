/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Btns from '../SaveCancelBtn';

class WorkForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, city, from, to, role, description } = this.props.data;
    return (
      <div>
        <form type='submt' onSubmit={this.props.formSubmit}>
          <label>Company:</label>
          <br></br>
          <input
            type='text'
            name='company'
            value={company}
            onChange={this.props.handleChange}
            placeholder='Enter Work Company'
          />
          <br></br>
          <label>City:</label> <br></br>
          <input
            type='text'
            name='city'
            value={city}
            onChange={this.props.handleChange}
            placeholder='Enter City'
          />
          <br></br>
          <label>From:</label>
          <br></br>
          <input
            type='text'
            name='from'
            value={from}
            onChange={this.props.handleChange}
            placeholder='YYYY'
          />
          <br></br>
          <label>To:</label>
          <br></br>
          <input
            type='text'
            name='to'
            value={to}
            onChange={this.props.handleChange}
            placeholder='YYYY'
          />
          <br></br>
          <label>Role:</label> <br></br>
          <input
            type='text'
            name='role'
            value={role}
            onChange={this.props.handleChange}
            placeholder='Enter Title '
          />
          <br></br>
          <label>Description:</label>
          <br></br>
          <textarea
            type='text'
            name='description'
            value={description}
            onChange={this.props.handleChange}
            placeholder='Description of duties'
            rows="4" cols="50"
          ></textarea>
          <br></br>
          <Btns usersData={this.props.data} />
        </form>
      </div>
    );
  }
}

export default WorkForm;
