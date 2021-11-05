import React, { useContext, useEffect, useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import axios from 'axios';
import MainContext from '../context/MainContext';
import '../css/home.css';

function Home() {
  const { userName, token, setTasks, tasks } = useContext(MainContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [respost, setRespost] = useState('');
  const [order, setOrder] = useState(false);

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    authorization: token,
  };

  const getAllTasks = async () => {
    axios.get(`http://localhost:3000/tasks/${
      order ? 'order' : ''
    }`, { headers })
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
  }, [token, respost, order]);

  const getTaskForUserValid = () => {
    if (!token) {
      return (
        <div className="homeTitles">
          <h2>
            Oops, seu token é inválido ou expirou,
            por favor faça login novamente.
          </h2>
        </div>);
    } return (
      <section>
        <div className="homeTitles">
          <h2>
            Olá
            {' '}
            {userName}
            , espero que esteja bem!
          </h2>
          <h4>Suas tarefas são:</h4>
        </div>
        <div className="homeOrderButton">
          <button
            type="button"
            onClick={ order ? () => setOrder(false) : () => setOrder(true) }
          >
            Ordem alfabética
          </button>
        </div>
        <section className="homeTasks">
          { tasks && tasks.map((task, index) => {
            const { _id } = task;
            return (
              <Card
                className="homeCard"
                style={ { width: '18rem' } }
                key={ index }
              >
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
      </section>
    );
  };

  const addNewTask = () => {
    if (!token) {
      return <h2> Nenhuma tarefa disponível.</h2>;
    } return (
      <section className="homeData">
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
        <div className="homeNewTaskButton">
          <button
            type="button"
            onClick={ () => addTasks() }
            disabled={ !taskDate || !taskDescription || !taskTitle || !taskStatus }
          >
            Enviar
          </button>
        </div>
      </section>
    );
  };

  return (
    <section>
      { getTaskForUserValid() }
      { addNewTask() }
      <div className="exitButton">
        <a href="/">
          Sair
        </a>
      </div>
    </section>
  );
}

export default Home;
