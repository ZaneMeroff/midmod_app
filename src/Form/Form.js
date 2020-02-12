import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  updateChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitRes = () => {
    this.props.postResOnDOM({
      id: 4,
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
      })
    this.setState({id: '', name: '', date: '', time: '', number: ''})
  }

  validateInputs = () => {
    if (!this.state.name || !this.state.date || !this.state.time || !this.state.number) {
      window.alert('Please enter all requested information')
    } else {
      this.props.postToAPI(this.state.name, this.state.date, this.state.time, this.state.number)
      this.clearInputs()
    }
  }

  clearInputs = () => {
    this.setState({name: '', date: '', time: '', number: ''})
  }

  render() {
    return (
      <section>
        <input
          name='name'
          value={this.state.name}
          onChange={this.updateChange}
          placeholder='name...'
          type='text'
        />
        <input
          name='date'
          value={this.state.date}
          onChange={this.updateChange}
          placeholder='date...'
          type='text'
        />
        <input
          name='time'
          value={this.state.time}
          onChange={this.updateChange}
          placeholder='time...'
          type='text'
        />
        <input
          name='number'
          value={this.state.number}
          onChange={this.updateChange}
          placeholder='number...'
          type='number'
        />
        <button onClick={this.validateInputs}>Submit Res!</button>
      </section>
    )
  }
}

export default Form;
