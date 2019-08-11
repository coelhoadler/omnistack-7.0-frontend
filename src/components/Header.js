import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './HeaderStyles';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
  return (
    <MainHeader>
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaSandler" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Nova postagem" />
        </Link>
      </div>
    </MainHeader>
  );
}
