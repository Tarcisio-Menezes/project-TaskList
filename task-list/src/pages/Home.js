import React, { useContext, useEffect } from 'react';
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

  const userIsValid = () => {
    if (!token) {
      return <h2>Oops, seu token é inválido ou expirou, por favor faça login novamente.</h2>
    } return (
      <section>
        <h2>Olá {userName}, espero que esteja bem!</h2>
        <h4>Suas tarefas são:</h4>
      </section>
    );
  };

  return (
    <section>
      { userIsValid() }
    </section>
  );
};

export default Home;
