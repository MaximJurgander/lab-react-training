import React from 'react'

const Random = (props) => {
  const {min, max} = props;
  let random = Math.floor(Math.random() * max) + min;
  return (
    <div>
      <p> Random value between {min} and {max} => {random} </p>
    </div>
  )
}

export default Random



