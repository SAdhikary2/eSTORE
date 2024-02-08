import React from 'react'
import { NavLink } from 'react-router-dom'
import  '../../pages/user/user.css'

const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
        <NavLink to="/dashboard/user"><h4 className="user">Dashboard</h4></NavLink>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/order"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
         
        </div>
      </div>
    </div>
  )
}

export default UserMenu
