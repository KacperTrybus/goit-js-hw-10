import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_AdugsLp0YVXuL7jid9KjybxV3oA1QFDGgPjtnczQPcAxKDgg8EA9Bs4yvvjXdOww';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        console.error('There was an error:', error);
      }
    })
    .catch(error => {
      console.error('There was an error:', error);
      return [];
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        console.error('There was an error:', error);
      }
    })
    .catch(error => {
      console.error('There was an error:', error);
      return [];
    });
}
