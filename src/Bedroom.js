import React from 'react'

function Bedroom(props) {
  return (
    <div className='bedroom' id={`bed-${props.bedNum}`}>
      <h1>Bedroom {props.bedNum}</h1>
    </div>
  )
}

export default Bedroom