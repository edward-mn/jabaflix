import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  // Colocamos a var entre colchetes para abrir o array que vem do useState //
  const [values, setValues] = useState(valoresIniciais); // Definindo uma categoria padrão //


  function setValue(chave, valor){
    // chave: nome, descrição, senha ... //
    setValues({
      ...values,
      [chave]: valor, // Define o valor da chave dinâmicamente - nome: 'valor //
    })
  }

  function handleChange(infosDoEvento){
    /* const {getAttribute, value = infosDoEvento.target; - novamente abrindo as informações que estão vindo */
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return(
    <PageDefault>
      <h1> Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]); // ... = Pegas as informações e adiciona nessa nova lista que estamos criando //

        setValues(valoresIniciais);
      }}>

      <FormField 
        label=" Nome da categoria"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />

      <FormField 
        label="Descrição"
        as='textarea'
        type="textarea"
        name="descricao"
        value={values.descricao}
        onChange={handleChange}
      />

      <FormField 
        label="Cor"
        type='color'
        name="cor"
        value={values.color}
        onChange={handleChange}
      />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return(
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;