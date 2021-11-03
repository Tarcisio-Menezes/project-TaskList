import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import MainContext from '../context/MainContext';
import { userRegister } from '../services/APIConnection';


function Login() {
  const { 
    userName,
    setUserName,
    userPass,
    setUserPass,
  } = useContext(MainContext);

  const addUser = async () => {
    const result = await userRegister(userName, userPass);
    return result;
  }

  return (
    <div>
      <section className="newUsers">
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
            onClick={ () => addUser() }
          >
            Cadastrar
          </Button>
      </section>
      <section className="users">
      <h4>Fazer Login</h4>
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
            onClick={ () => addUser() }
          >
            Cadastrar
          </Button>
      </section>
    </div>
  );
}

export default Login;
