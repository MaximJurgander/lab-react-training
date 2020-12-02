import React from 'react'
import './DriverCard.css'

const DriverCard = (props) => {
  const {name, rating, img, car: {model, licensePlate}} = props
  return (
    <div className="DriverCard">
      <h2>{name}</h2>
      <p>{rating}</p>
      <img src={img} alt={name}/>
      <p>{model} - {licensePlate}</p>
    </div>
  )
}

export default DriverCard
