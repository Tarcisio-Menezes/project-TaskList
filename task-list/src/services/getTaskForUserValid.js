import { Card } from 'react-bootstrap';

const getTaskForUserValid = (token, tasks, userName) => {
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

export default getTaskForUserValid;
