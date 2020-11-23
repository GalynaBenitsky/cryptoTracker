import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';
import 'react-bootstrap';


function Navigation() {

  const refreshPage= ()=> {
    window.location.reload(true);
  }

  return (
    <>
      <nav className="navbar bg-dark navbar-dark">
        <Link className='navbar-brand nav-left' to='/'>Crypto Tracker</Link>
        <ul className='nav nav-rigth' onClick={refreshPage}>

          <li className='nav-item'>
            <Link className='link' to="/">Cad $</Link>
          </li>
          
          <li className='nav-item'>
            <Link className='link' to="/usd">USD $</Link>
          </li>
         
          <li className='nav-item'>
            <Link className='link' to="/eur">EURO €</Link>
          </li>

        </ul>
      </nav>
    </>
  );
}
export default Navigation;