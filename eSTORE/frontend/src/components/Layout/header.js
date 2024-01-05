import React from "react";
import { NavLink } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
import {useAuth} from '../../context/auth'
import  toast from 'react-hot-toast';

function Header() {

  //using hook
  const [auth,setAuth]=useAuth();
  //creating logout handler
  const handleLogout =()=>{
    setAuth({
      ...auth,
      user:null,
      token:"",
    });

    localStorage.removeItem("auth");
    toast.success("Logout Successfully !!!");

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  bg-dark ">
        <div className="container-fluid ">
          <NavLink to="/" className="navbar-brand text-light">
          <HiShoppingBag />
            eSTORE
          </NavLink>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
              <li className=" nav-item">
                <NavLink to="/category" className="nav-link active " aria-current="page">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>

              {
                !auth.user ? (
                  <>
                  <li className="nav-item">
                <button>
                  <NavLink to="/register" className="nav-link ">
                    Register
                  </NavLink>
                </button>
              </li>
              <li className="nav-item">
                <button>
                  <NavLink to="/login" className="nav-link ">
                    Login
                  </NavLink>
                </button>
              </li>
                  </>
                ):(
                  <>
                  <button>
                  <NavLink onClick={handleLogout} to="/login" className="nav-link ">
                    Logout
                  </NavLink>
                </button>
                  </>
                )
              }


              <li className="nav-item">
                <button>
                  <NavLink to="/cart" className="nav-link ">
                    Cart(0)
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
