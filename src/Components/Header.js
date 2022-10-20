import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext,logOut } from "../Contexts/UserContext";

const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleSignOut = () => {
     logOut()
     .then (()=>{

     })
     .catch(error => console.error(error));
    
    };

  return (
    <div>
      <div className="navbar bg-base-100 bg-violet-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">Home</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Authentication
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">
            {/* Link */}
            <Link className="btn btn-ghost normal-case text-xl" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/orders">
              Orders
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">
              Login
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/register">
              Register
            </Link>
            
            <button onClick={handleSignOut} className="btn btn-ghost normal-case text-xl">Sign Out</button>
           
            {user?.email && <span className="mt-3">Wellcome, {user.email}</span>}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
