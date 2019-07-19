import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';

export default function Header() {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Camera" />
        </Link>
      </div>
    </Container>
  );
}

