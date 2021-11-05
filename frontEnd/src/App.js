import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Login from './pages/Login';
import AddUser from './pages/AddUser';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/create-user" component={ AddUser } />
        <Route exact path="/home" component={ Home } />
        <Route path="/*" component={ ErrorPage } />
      </Switch>
    </Provider>
  );
}

export default App;
