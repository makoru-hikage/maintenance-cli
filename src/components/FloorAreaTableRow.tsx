import * as React from 'react'

const buttonClasses = "text-black dark:text-white border px-2 m-2"

export interface FloorArea {
  areaCode: string,
  description: string,
  floor: string,
  row: number,
  column: number
}

interface Props {
  floorArea: FloorArea
}

export const FloorAreaTableRow: React.FC<Props> = ({floorArea}) => {

  return <tr>
    <td className="index-td">{floorArea.areaCode}</td>
    <td className="index-td">{floorArea.description}</td>
    <td className="index-td">{floorArea.floor}</td>
    <td className="index-td">{floorArea.row}</td>
    <td className="index-td">{floorArea.column}</td>
    <td className="index-td">
      <button className={buttonClasses}>Edit</button>
      <button className={buttonClasses}>Delete</button>
      <button className={buttonClasses}>"View"</button>
    </td>
  </tr>
}