import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';

import './Menu.css';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img src={Logo} alt="logo cdfflix" className="Logo" />
    </Link>

    <Button as={Link} to="/cadastro/video">Novo Video</Button>
  </nav>
);

export default Menu;
