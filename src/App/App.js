import React, { Component } from 'react';
import Form from '../Form/Form';
import CardArea from '../CardArea/CardArea';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [ {} ]
    }
  }

  postResOnDOM = reservation => {
    this.setState({reservations: [...this.state.reservations, reservation]})
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({reservations: data}))
  }

  postToAPI = (name, date, time, number ) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.reservations.length + 1,
        name: name,
        date: date,
        time: time,
        number: number
      }),
      headers: {'Content-Type': 'application/json'}
    }
    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response => response.json())
      .then(newRes => this.setState({reservations: [...this.state.reservations, newRes]}))
    }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form postToAPI={this.postToAPI} res={this.state.reservations}/>
        </div>
        <div className='resy-container'>
          <CardArea cards={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
