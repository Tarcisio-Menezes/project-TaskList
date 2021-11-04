import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Card } from 'react-bootstrap';
import axios from 'axios';
import MainContext from '../context/MainContext';

function Home() {
  const { userName, token, setTasks, tasks } = useContext(MainContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [respost, setRespost] = useState('');

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    authorization: token,
  };

  const getAllTasks = async () => {
    axios.get('http://localhost:3000/tasks/order', { headers })
      .then((response) => {
        if (response.data) {
          return setTasks(response.data);
        }
      })
      .catch((errorOrResponse) => errorOrResponse);
  };

  const addTasks = async () => {
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
      .catch((errorOrResponse) => errorOrResponse);
  };

  const removeTasks = async (taskId) => {
    axios.delete(`http://localhost:3000/tasks/${taskId}`, { headers })
      .then(() => setRespost(tasks))
      .catch((errorOrResponse) => errorOrResponse);
  };

  const editTasks = async (taskId) => {
    const body = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      status: taskStatus,
    };
    axios.put(`http://localhost:3000/tasks/${taskId}`, body, { headers })
      .then(() => setRespost(tasks))
      .catch((errorOrResponse) => errorOrResponse);
  };

  useEffect(() => {
    async function getTasks() {
      await getAllTasks();
    }
    getTasks();
  }, [token, respost]);

  const getTaskForUserValid = () => {
    if (!token) {
      return (
        <h2>
          Oops, seu token é inválido ou expirou,
          por favor faça login novamente.
        </h2>);
    } return (
      <section>
        <h2>
          Olá
          {' '}
          {userName}
          , espero que esteja bem!
        </h2>
        <h4>Suas tarefas são:</h4>
        { tasks && tasks.map((task, index) => {
          const { _id } = task;
          return (
            <Card style={ { width: '18rem' } } key={ index }>
              <Card.Body>
                <Card.Title>
                  { task.title }
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                >
                  Prazo:
                  {' '}
                  { task.date }
                </Card.Subtitle>
                <Card.Subtitle
                  className="mb-2 text-muted"
                >
                  Status:
                  {' '}
                  { task.status }
                </Card.Subtitle>
                <Card.Text>
                  { task.description }
                </Card.Text>
                <button
                  type="button"
                  onClick={ () => editTasks(_id) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={ () => removeTasks(_id) }
                >
                  Deletar
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </section>
    );
  };

  const addNewTask = () => {
    if (!token) {
      return <h2> Nenhuma tarefa disponível.</h2>;
    } return (
      <section>
        <h4>Adicionar ou Editar tarefa</h4>
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
          type="button"
          onClick={ () => addTasks() }
          disabled={ !taskDate || !taskDescription || !taskTitle || !taskStatus }
        >
          Enviar
        </button>
      </section>
    );
  };

  return (
    <section>
      { getTaskForUserValid() }
      { addNewTask() }
      <Link to="/">
        <button
          type="button"
        >
          Sair
        </button>
      </Link>
    </section>
  );
}

export default Home;
