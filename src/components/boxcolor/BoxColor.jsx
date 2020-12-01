import React from 'react'
import './BoxColor.css'

const BoxColor = (props) => {
  const { r, g, b } = props
  return (
    <div className = "Box-container">
      <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}} className="BoxColor">
        <p>rgb({r}, {g}, {b})</p>
      </div>
    </div>
  )
}

export default BoxColor
