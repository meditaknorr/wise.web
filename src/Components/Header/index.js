import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Logotipo, Links } from './style.js';
import logotipo from '../../Medias/imgs/wiser.png';

export default function() {

  return (
    <React.Fragment>
      <Header>
        <Logotipo>
          <img src={logotipo} alt="logotipo" />
          <p>we believe</p>
        </Logotipo>
        <Links>
          <li><Link to="/our-services">Serviços</Link></li>
          <li><Link to="/our-customers">Clientes</Link></li>
          <li><Link to="/business-partners">Parceiros</Link></li>
          <li><Link to="/about-us">Quem Somos</Link></li>
          <li><Link to="/contact-us">Contacto</Link></li>
        </Links>
      </Header>
    </React.Fragment>
  )
}
