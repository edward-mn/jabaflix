import React from 'react';

function ButtonLink(props){ //Pegando objeto para ter acesso as propriedades //
  // props => { classNamme: "Pegando o valor que foi inserido" , href: "/"}
  console.log(props);
  return(
    // Acessando a propriedade className através do objeto passado por parâmetro //
    <a href={props.href} className={props.className}> 
      {props.children}
    </a>
  );
}

export default ButtonLink;