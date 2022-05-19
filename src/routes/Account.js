import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Account() {
  return (
    <div className="App-header"> My Account
        <Outlet/>
    </div>
  )
}

export default Account