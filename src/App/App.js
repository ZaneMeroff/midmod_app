import React, { Component } from 'react';
import Form from '../Form/Form';
import CardArea from '../CardArea/CardArea';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <CardArea />
        </div>
      </div>
    )
  }
}

export default App;
