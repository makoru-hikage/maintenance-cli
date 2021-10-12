import { useState } from 'react'

import { FloorAreaTable } from './components/FloorAreaTable'
import { FloorArea } from './components/FloorAreaTableRow'

let perhaps: FloorArea = {
  areaCode: "perhaps",
  description: "perhaps",
  floor: "perhaps",
  row: 0,
  column: 0
}

function App() {

  return (
  <div className="mx-16">
    <div id="top-buttons">
      <button className="text-black dark:text-white p-4">Add</button>
    </div>
    <div id="table-container">
      <FloorAreaTable floorAreas={[perhaps]}/>
    </div>
  </div>
  )
}

export default App
