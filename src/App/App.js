import React, { Component } from 'react';
import Form from '../Form/Form';
import CardArea from '../CardArea/CardArea';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations:
        [{
          id: 1,
          name: "Test Res",
          date: "12/29",
          time: "7:00",
          number: 12
        }]
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form postResOnDOM={this.postResOnDOM} res={this.state.reservations}/>
        </div>
        <div className='resy-container'>
          <CardArea cards={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
