import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Provider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState();

  const context = {
    userName,
    setUserName,
    userPass,
    setUserPass,
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