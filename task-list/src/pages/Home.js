import React, { useContext, useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import axios from 'axios';
import MainContext from '../context/MainContext';

function Home () {

  const { userName, token, setTasks, tasks } = useContext(MainContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [respost, setRespost] = useState('');

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

  const addTasks = async (token) => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'authorization':token,
    };

    const body = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      status: taskStatus,
    };
  
    axios.post('http://localhost:3000/tasks', body, { headers })
      .then((response) => {
        if (response.data) {
          return setRespost(response.data);
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
  }, [token, respost]);

  const getValidUserTask = () => {
    if (!token) {
      return <h2>Oops, seu token é inválido ou expirou, por favor faça login novamente.</h2>
    } return (
      <section>
        <h2>Olá {userName}, espero que esteja bem!</h2>
        <h4>Suas tarefas são:</h4>
        { tasks && tasks.map((task, index) => {
          return (
          <Card style={{ width: '18rem' }} key={ index }>
            <Card.Body>
              <Card.Title>
                { task.title }
              </Card.Title>
              <Card.Subtitle 
                className="mb-2 text-muted">
                    Prazo: { task.date }
              </Card.Subtitle>
              <Card.Subtitle 
                className="mb-2 text-muted">
                  Status: { task.status }
              </Card.Subtitle>
              <Card.Text>
                { task.description }
              </Card.Text>
              <button href="#">Editar</button>
              <button href="#">Deletar</button>
            </Card.Body>
          </Card>
          );
        })
      }
      </section>
    );
  };

  const addNewTask = () => {
    if (!token) {
      return <h2> Nenhuma tarefa disponível.</h2>
    } return (
        <section>
          <h4>Adicionar nova tarefa</h4>
          <Form.Control
            type="text"
            placeholder="Título da nova tarefa"
            onChange={ ({ target }) => setTaskTitle(target.value) }
            required
          />
          <Form.Control
            type="text"
            placeholder="Descrição"
            onChange={ ({ target }) => setTaskDescription(target.value) }
            required
          />
          <Form.Control
            type="text"
            placeholder="Andamento da tarefa"
            onChange={ ({ target }) => setTaskStatus(target.value) }
            required
          />
          <Form.Control
            type="text"
            placeholder="Prazo DD/MM/AA"
            onChange={ ({ target }) => setTaskDate(target.value) }
            required
          />
          <button
            onClick={ () => addTasks(token) }
            disabled={ !taskDate || !taskDescription || !taskTitle || !taskStatus }
          >
            Enviar
          </button>
        </section>
    );
  };



  return (
    <section>
      { getValidUserTask() }
      { addNewTask() }
    </section>
  );
};

export default Home;
