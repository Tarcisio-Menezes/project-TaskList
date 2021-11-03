import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route path="/home" component={ Home } />
      <Route path="/*" component={ ErrorPage } />
    </Switch>
  );
}

export default App;
