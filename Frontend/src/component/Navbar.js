import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {

  const logout = () => {

    window.localStorage.setItem('anyLoggedIn', false);
    window.localStorage.removeItem('loggedInUser');
    window.localStorage.removeItem('user');
  };


  return (
    // <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">International Institute Of Information Technology, Bangalore</a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              <a className="nav-link" href="#" aria-current="/">My Salary</a>
              <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>
            </div>
          </div>
        </div>
      </nav>
    // </div>
  )
}
