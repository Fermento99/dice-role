import React from 'react'
import Pool from './areas/Pool'
import Condition from './areas/Condition'
import Threshold from './areas/Threshold'

export default function App() {
  return (
    <div>
      <h1>Dice Role!</h1>
      <Pool />
      <Condition />
      <Threshold />
    </div>
  )
}
