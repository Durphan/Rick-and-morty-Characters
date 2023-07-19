import * as React from "react"
import { Navbar } from "./navbar"
import { Outlet } from "react-router-dom"





export const RouterLayout:React.FC<{}> = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}