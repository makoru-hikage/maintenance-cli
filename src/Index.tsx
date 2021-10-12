import { useCookies } from 'react-cookie'
import { FC } from 'react'
import { Redirect } from 'react-router'

import { FloorAreaTable } from './components/FloorAreaTable'
import { FloorArea } from './components/FloorAreaTableRow'
let placeholder: Array<FloorArea> = [{
  areaCode: "0000",
  description: "A descript or human-readable name",
  floor: "The Floor's Name",
  row: 1,
  column: 1
}]

interface Props {
  loggedIn: boolean
}

const Index = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    removeCookie("token")
  }

  return (
  <div className="mx-16">
    <div id="navbar" className="flex flex-row-reverse flex-wrap">
      <button className="text-black dark:text-white p-2" onClick={logout}>Logout</button>
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

export default Index
