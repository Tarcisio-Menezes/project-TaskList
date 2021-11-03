import axios from 'axios';

export const userRegister = (userName, pass) => {
  const body = {
    name: userName,
    password: pass,
  };

  axios.post('http://localhost:3030/users', body)
    .then((response) => {
      return response.data;
    })
    .then((data) => console.log(data))
    .catch((errorOrResponse) => {
      if (errorOrResponse.status) {
        return console.error(`Request failed with status ${errorOrResponse.status}`);
      } return console.error(errorOrResponse);
    });
}
