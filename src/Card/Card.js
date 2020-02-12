import React from 'react';
import './Card.css'

const Card = props => {

  return (
    <div id='card'>
      <h4>Name: {props.name}</h4>
      <h4>Date: {props.date}</h4>
      <h4>Time: {props.time}</h4>
      <h4>Size of Party: {props.number}</h4>
      <h5>id: {props.id}</h5>
      <button>cancel</button>
    </div>
  )

}

export default Card;
