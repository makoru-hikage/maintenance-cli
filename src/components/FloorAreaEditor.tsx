import { useState, ChangeEvent, FunctionComponent } from "react"
import { FloorArea } from "./FloorAreaTableRow"

export interface FloorAreaForm {
  description: string,
  floor: string,
  row: number,
  column: number
}

interface Props {
  floorArea: FloorArea
}

export const FloorAreaEditor: FunctionComponent<Props> = ({floorArea}) => {
  const [form, setState] = useState<FloorAreaForm>({
    description: "",
    floor: "",
    row: 1,
    column: 1
  })

  const updateField = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return <div className="inline-block align-bottom bg-gray-400 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    <form className="flex flex-col flex-wrap px-8 pt-6 pb-8 mb-4 bg-gray-300">
      <div className="m-4">
        <label htmlFor="area_code" className="table-cell text-black">Area Code: </label>
        <input readOnly type="text" name="area_code" id="area-code-field" value={floorArea.areaCode} className="border shadow table-cell"/>
      </div>
      <div className="m-4">
        <label htmlFor="description" className="table-cell text-black">Description: </label>
        <input onChange={updateField} type="text" name="description" id="description-field" value={form.description} className="border shadow table-cell"/>
      </div>
      <div className="m-4">
        <button id="cancel-button" className="text-black p-2 border align-end bg-gray-400">Cancel</button>
        <button id="submit-button" className="text-black p-2 border align-end bg-green-600">Submit</button>
      </div>
    </form>
  </div>
}