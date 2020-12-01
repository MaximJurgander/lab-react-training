import React from 'react'
import './Creditcard.css'

const Creditcard = (props) => {
  const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
  const hashNum = '*'.repeat(number.length - 4) + number.slice(-4, number.length);
  return (
    <div className="Creditcard-container"> 
      <div className="Creditcard">
        <p>{type}</p>
        <h4>{hashNum}</h4>
        <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  )
}

export default Creditcard
