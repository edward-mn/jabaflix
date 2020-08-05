import styled from 'styled-components';

// Acessando a tag a através da sytle  - Tag button está em tag de templete string - & utiliza para referencias a própria classe //

// Caso houver a necessidade de alterar a tag para um valor dinâmico, podemos alterar para styled(componente) - styled(Link) //
const Button = styled.button` 
  color: var(--white);
  border: 1px solid var(--white);
  background: var(--primary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  
  &:hover,
  &:focus {
  opacity: .5;
  }
`;

export default Button;