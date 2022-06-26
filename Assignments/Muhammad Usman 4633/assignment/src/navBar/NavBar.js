import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar(props) {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#" style={{color:'white'}}><h3>E-commerce</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{backgroundColor:'black', color: 'white'}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" >
                <Link className="nav-link active hov" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link active hov" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hov" aria-current="page" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hov" aria-current="page" to="/service">Services</Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link active hov" aria-current="page" to="/login">Login</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link active hov" aria-current="page" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hov" aria-current="page" to="/logout">LogOut</Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-info " type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default NavBar;