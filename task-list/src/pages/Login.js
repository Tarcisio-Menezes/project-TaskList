/* eslint-disable no-alert */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import MainContext from '../context/MainContext';
import '../css/login.css';

function Login() {
  const {
    userName,
    setUserName,
    userPass,
    setUserPass,
    setToken,
  } = useContext(MainContext);

  const userLogin = (nameUser, pass) => {
    const body = {
      name: nameUser,
      password: pass,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    axios.post('http://localhost:3000/login', body, { headers })
      .then((response) => {
        if (response.data.token) {
          return setToken(response.data.token);
        }
      })
      .catch((errorOrResponse) => alert(
        `Houve um problema ao autenticar o usuário ${userName}. ${errorOrResponse}`,
      ));
  };

  return (
    <div>
      <section className="titlesLogin">
        <h1>Ebyrt Ágil</h1>
        <h4>Login de pessoa colaboradora</h4>
      </section>
      <section className="dataLogin">
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
        <Link to="/home">
          <button
            variant="light"
            type="submit"
            onClick={ () => userLogin(userName, userPass) }
            disabled={ !userName || !userPass }
          >
            Entrar
          </button>
        </Link>
      </section>
      <br />
      <br />
      <div className="register">
        <p>Ainda não tem cadastro?</p>
        <Link to="/create-user">
          <button
            type="button"
          >
            Crie seu usuário aqui
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
