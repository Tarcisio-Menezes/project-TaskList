import axios from 'axios';

export const userRegister = (userName, pass) => {
  const body = {
    name: userName,
    password: pass,
  };

  const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  };

  axios.post('http://localhost:3000/users', body, { headers })
    .then((response) => {
      return response.data;
    })
    .then((data) => data)
    .catch((errorOrResponse) => {
      if (errorOrResponse.status) {
        return console.error(`Request failed with status ${errorOrResponse.status}`);
      } return console.error(errorOrResponse);
    });
}

export const userLogin = (userName, pass) => {
  const body = {
    name: userName,
    password: pass,
  };

  const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  };

  axios.post('http://localhost:3000/login', body, { headers })
    .then((response) => {
      return response.data;
    })
    .then((data) => data)
    .catch((errorOrResponse) => {
      if (errorOrResponse.status) {
        return console.error(`Request failed with status ${errorOrResponse.status}`);
      } return console.error(errorOrResponse);
    });
}