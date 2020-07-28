import React from 'react';
import Logo from '../../assets/img/Logo.svg';
import './Menu.css';
import Button from '../Button';

// import ButtonLink from './components/ButtonLink'; //


function Menu(){ // Todo componente deve começar com letra maiúscula //
  return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Jabaflix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu; // Definindo nome para exportação/utilização //