import React, { useContext } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import MainContext from '../context/MainContext';

function AddUser() {

  const { 
    userName,
    setUserName,
    userPass,
    setUserPass,
    setRegisterUser,
  } = useContext(MainContext);

  const createUser = (userName, pass) => {
    const body = {
      name: userName,
      password: pass,
    };
  
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    };
  
    axios.post('http://localhost:3000/users', body, { headers })
      .then((response) => {
        if (response.data.user.name) {
          setRegisterUser(response.data.user);
          return alert(`O usuário ${userName} foi cadastrado com sucesso!`)
        } 
      })
      .catch((errorOrResponse) => {
         return alert(`O usuário ${userName} já está cadastrado. ${errorOrResponse}`);
      });
  }

  return (
    <div>
      <h1>Ebyrt Ágil</h1>
        <h4>Cadastrar nova pessoa usuária</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o seu nome"
            onChange={ ({ target }) => setUserName(target.value) }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            onChange={ ({ target }) => setUserPass(target.value) }
          />
        </Form.Group>
        <Button
          variant="light"
          type="submit"
          onClick={ () => createUser(userName, userPass) }
          disabled={ !userName || !userPass }
        >
          Cadastrar
        </Button>
    </div>
  );
}

export default AddUser;
