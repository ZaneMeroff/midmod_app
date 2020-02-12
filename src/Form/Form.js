import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'a',
      date: 'a',
      time: 'a',
      number: 'a'
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
        <button onClick={this.submitRes}>Submit Res!</button>
      </section>

    )

  }

}



export default Form;
