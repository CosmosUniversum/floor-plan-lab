import React from 'react'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

function FloorPlan(props) {
  return (
    <div class='floorPlan'>
      <Bedroom bedNum='1'/>
      <Kitchen />
      <Bath size='Full'/>
      <Bedroom bedNum='2'/>
      <LivingRoom />
      <Bath size='Half' />
      <Bedroom bedNum='3'/>
    </div>
  )
}

export default FloorPlan