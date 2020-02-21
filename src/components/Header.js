import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
  
    <nav className="navbar bg-dark">
     <a className="navbar-brand" href="#">
    <img src='https://mdbootstrap.com/img/logo/mdb-transparent.png' height="30" alt="mdb logo" />
  </a>
     <Link to="/" className="text-white">Home</Link>
   
     
    </nav>
    
  );
};

export default Header;

