import React, {FunctionComponent} from "react"

import {FloorAreaTableRow, FloorArea} from "./FloorAreaTableRow"

const columnFields = [
  "Area Code",
  "Description",
  "Floor",
  "Row",
  "Column",
  "Actions",
]

interface Props {
  floorAreas: Array<FloorArea>
}

export const FloorAreaTable: FunctionComponent<Props>= ({floorAreas}) => {

  return <table className="min-w-full border-collapse block md:table">
  <thead className="block md:table-header-group">
    <tr>
      {columnFields.map((field, id) => <th key={id} className="index-th">{field}</th>)}
    </tr>
  </thead>
  <tbody>
    {floorAreas.map(area => <FloorAreaTableRow floorArea={area}/>)}
  </tbody>
</table>
}