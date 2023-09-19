import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfoDiv = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  loader.style.display = 'block';
  catInfoDiv.style.display = 'none';
  error.style.display = 'none';

  fetchCatByBreed(selectedBreedId)
    .then(catInfo => {
      loader.style.display = 'none';
      catInfoDiv.innerHTML = `
          <img src="${catInfo[0].url}" alt="Kot" style="height: 400px; width: 600px">
          <p>Nazwa rasy: ${catInfo[0].breeds[0].name}</p>
          <p>Opis: ${catInfo[0].breeds[0].description}</p>
          <p>Temperament: ${catInfo[0].breeds[0].temperament}</p>
        `;
      catInfoDiv.style.display = 'block';
    })
    .catch(error => {
      loader.style.display = 'none';
      error.style.display = 'block';
      console.error(error.message);
    });
});

fetchBreeds()
  .then(breeds => {
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  })
  .catch(error => {
    error.style.display = 'block';
    console.error(error.message);
  });
