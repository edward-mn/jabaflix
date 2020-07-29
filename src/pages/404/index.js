import React from 'react';
import { Link } from 'react-router-dom';
import Page404 from '../../assets/img/page404animation.gif';

function Pagina404(){
  return(
    <>
      <Link to ="/">
        Ir para home
      </Link>

      <img className="Page404" src={Page404} alt="Page not fout" />
    </>
  )
}

export default Pagina404;