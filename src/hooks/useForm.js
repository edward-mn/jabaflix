import { useState } from 'react';

function useForm(valoresIniciais){
  const [values, setValues] = useState(valoresIniciais); // Definindo uma categoria padrão //
  function setValue(chave, valor){
    // chave: nome, descrição, senha ... //
    setValues({
      ...values,
      [chave]: valor, // Define o valor da chave dinâmicamente - nome: 'valor //
    });
  };

  function handleChange(infosDoEvento){
    /* const {getAttribute, value = infosDoEvento.target; - novamente abrindo as informações que estão vindo */
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  };

  function clearForm(){
    setValues(valoresIniciais);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;