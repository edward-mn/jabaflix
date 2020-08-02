import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  // Colocamos a var entre colchetes para abrir o array que vem do useState //

  // Utilizar quando algum efeito colateral aconteça //
  useEffect(() => { // 1 - O que queremos que aconteça, 2- Quando a gente quer que aconteça - opciontal em Array//
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://jabaflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, [], // Deixamos o array vazio, para ele entrar em ação apenas quando eftuarmos a ação do primeir parâmetro //

    /*  setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          "id": 1,
          "nome": "Ufologia",
          "descricao": "Saiba mais clicando aqui...",
          "cor":  "ff8642"
        },
        {
          "id": 2,
          "nome": "Documentários",
          "descricao": "Mais documentários clicando aqui...",
          "cor": "#c0362c"
        },
      ]);
    }, 4 * 100); */
  );

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]); // ... = Pegas as informações e adiciona nessa nova lista que estamos criando //

        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
