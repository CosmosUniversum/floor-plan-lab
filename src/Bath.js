import React from 'react'

function Bath(props) {
  return (
    <div className='bath' id={`${props.size}bath`}>
      <h1>{props.size} Bath</h1>
    </div>
  )
}

export default Bath