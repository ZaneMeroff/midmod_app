import React from 'react';
import Card from '../Card/Card';
import './CardArea.css'

const CardArea = props => {

  const cards = props.cards.map(res => {

    return (
      <Card
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
        id={res.id}
      />
    )})

  return (
    <div id='card-area'>
      {cards}
    </div>
  )

}

export default CardArea;
