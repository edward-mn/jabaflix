import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.svg';
import './Menu.css';
import Button from '../Button';

// import ButtonLink from './components/ButtonLink'; //


function Menu(){ // Todo componente deve começar com letra maiúscula //
  return(
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Jabaflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu; // Definindo nome para exportação/utilização //