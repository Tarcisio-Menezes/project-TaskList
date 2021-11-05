import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Provider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [registerUser, setRegisterUser] = useState('');
  const [token, setToken] = useState('');
  const [tasks, setTasks] = useState('');

  const context = {
    userName,
    setUserName,
    userPass,
    setUserPass,
    token,
    setToken,
    registerUser,
    setRegisterUser,
    tasks,
    setTasks,
  };

  return (
    <MainContext.Provider value={ context }>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;
