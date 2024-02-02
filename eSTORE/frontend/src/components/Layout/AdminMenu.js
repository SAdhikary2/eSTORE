import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
  
          <NavLink
            to="#"
            className=" disabled  list-group-item list-group-item-action active"
            aria-current="true"
          >
            Admin Panel
          </NavLink>

          <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action warning">
           Create Category
          </NavLink>
          <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action warning">
           Create Product
          </NavLink>
          <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action warning">
            Users
          </NavLink>
         
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
