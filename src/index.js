import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter, // Responsável de encapsular nossa aplicação para se tornar uma SPA //
  Switch, // Como se fosse nosso IF para as navegações //
  Route, // As rotas ou caminhos que possuimos dentro da aplicação //
} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Pagina404 from './pages/404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
