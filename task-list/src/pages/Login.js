import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Pessoa colaboradora Ebyrt</Form.Label>
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
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </Form.Group>

        <Link to="/home">
          <Button
            variant="light"
            type="submit"
            disabled={ false }
          >
            Entrar
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
