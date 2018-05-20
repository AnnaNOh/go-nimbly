const axios = require('axios');

export const getCities = userInput => {
  return axios.get('/cities', {
    params: {
      input: userInput
    }
  });
};

export const getWeather = woeId => {
  return axios.get('/weather', {
    params: {
      input: woeId
    }
  });
};
