import React from 'react'
import './Card.scss'

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>${props.price}/night</p>
    </div>
  )
}

export default Card
