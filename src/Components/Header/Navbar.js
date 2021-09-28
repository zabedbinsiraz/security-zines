import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [loggedInUser,setLoggedInUser] = useState({});

  useEffect(() => {
    setLoggedInUser({})
  },[] )

    return (
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark navbar-container">
      <div className="container-fluid ">
        <div className="col-md-7 col-sm-12 p-2">
          <a className="navbar-brand" href="/">Security-Zines</a>



        </div>

        <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse col-md-5 col-sm-12" id="navbarSupportedContent">

          <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-wrap">
            <li className="nav-item  ms-5">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
           
            <li className="nav-item ms-5">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            


            <li className="nav-item ms-5">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item ms-5">
              <Link className="nav-link" to="/login">{loggedInUser.email ? loggedInUser.buyer : 'Login'}</Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
    );
};

export default Navbar;