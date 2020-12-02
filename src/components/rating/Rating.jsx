import React from 'react'
import './Rating.css'

const Rating = (props) => {
  const { children } = props;
  let starRounded = Math.round(children);
  let stars =  '★'.repeat(starRounded) + ('☆☆☆☆☆').slice(starRounded, 5);
  return (
    <div className="Rating">
      {stars}
    </div>
  )
}

export default Rating


