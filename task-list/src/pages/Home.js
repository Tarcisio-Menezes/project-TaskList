import React, { useContext, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import MainContext from '../context/MainContext';

function Home () {

  const { userName, token, setTasks, tasks } = useContext(MainContext);

  const getAllTasks = async (token) => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'authorization':token,
    };

  
    axios.get('http://localhost:3000/tasks/order', { headers })
      .then((response) => {
        if (response.data) {
          return setTasks(response.data);
        } 
      })
      .catch((errorOrResponse) => {
         return errorOrResponse;
      });
  }

  useEffect(() => {
    async function getTasks() {
      await getAllTasks(token);
    }
    getTasks();
  }, [token, setTasks]);

  console.log(tasks);

  const getValidUserTask = () => {
    if (!token) {
      return <h2>Oops, seu token é inválido ou expirou, por favor faça login novamente.</h2>
    } return (
      <section>
        <h2>Olá {userName}, espero que esteja bem!</h2>
        <h4>Suas tarefas são:</h4>
        { tasks.map((task) => {
          return (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{ task.title }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Status: { task.status }</Card.Subtitle>
              <Card.Text>
                { task.description }
              </Card.Text>
              <button href="#">Editar</button>
              <button href="#">Deletar</button>
            </Card.Body>
          </Card>
          );
        })
      };
      <br/>
      </section>
    );
  };

  return (
    <section>
      { getValidUserTask() }
    </section>
  );
};

export default Home;
