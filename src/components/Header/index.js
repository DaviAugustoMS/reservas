import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

import './stylles.css';


export default function Header() {
 return (
   <header className="container">
     <Link to="/">
      <img className='logo' src={Logo} alt="logo"/>
     </Link>

     <Link className="reservas" to="/reservas">
      <div>
        <strong>Minhas reservas</strong>
        <span>3 reservas</span>
      </div>
     </Link>
   </header>
  );
}