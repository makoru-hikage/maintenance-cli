import { useState } from 'react'

import { FloorAreaTable } from './components/FloorAreaTable'
import { FloorArea } from './components/FloorAreaTableRow'

let placeholder: Array<FloorArea> = [{
  areaCode: "0000",
  description: "A descript or human-readable name",
  floor: "The Floor's Name",
  row: 1,
  column: 1
}]

function App() {

  return (
  <div className="mx-16">
    <div id="navbar" className="flex flex-row-reverse flex-wrap">
      <button className="text-black dark:text-white p-2">Logout</button>
    </div>
    <div id="top-buttons">
      <button className="text-black dark:text-white px-2 m-2 border">Add</button>
    </div>
    <div id="table-container">
      <FloorAreaTable floorAreas={placeholder}/>
    </div>
  </div>
  )
}

export default App
