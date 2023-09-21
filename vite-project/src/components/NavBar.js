import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Peli Store</a>
        <ul className="categories navbar-nav me-auto mb-2 mb-lg-0">
         
          <li className="nav-item">
            <a className="nav-link" href="#">Principales</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Reseñas</a>
          </li>
        
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;