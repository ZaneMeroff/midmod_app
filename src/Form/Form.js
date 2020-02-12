import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      name: "Test Res",
      date: "12/29",
      time: "7:00",
      number: 12
      }
  }

  render() {
    return (
      <form>
        <input
          name='name'
          value='name'
          placeholder='name...'
        />
        <input
          name='date'
          value='date'
          placeholder='date...'
        />
        <input
          name='time'
          value='time'
          placeholder='time...'
        />
        <input
          name='number'
          value='number'
          placeholder='number in party...'
        />
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
