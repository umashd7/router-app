import React from 'react'
import {  Outlet } from 'react-router-dom'

function Account() {
  return (
    <div className="App-header"> My Account
        <Outlet/>
    </div>
  )
}

export default Account