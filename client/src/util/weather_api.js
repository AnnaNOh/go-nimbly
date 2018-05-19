const axios = require('axios');

export const getCities = userInput => {
  return axios.get('/cities', {
    params: {
      input: userInput
    }
  });
};
