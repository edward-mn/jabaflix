import React from 'react';
import styled from 'styled-components';
import Page404 from '../../assets/img/page404animation.gif';
import PageDefault from '../../components/PageDefault';

const Img = styled.img`
  width: 100%;
`;

function Pagina404() {
  return (
    <PageDefault paddingAll={0}>
      <Img className="Page404" src={Page404} alt="Page not fout" />
    </PageDefault>
  );
}

export default Pagina404;
