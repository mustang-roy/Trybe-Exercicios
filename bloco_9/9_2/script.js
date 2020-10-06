const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(response => response.joke)
    .catch(() => 'sem piadinhas :/')

};

// window.onload = () => fetchJoke();

async function jokeR() {
  const msgJ = await fetchJoke()
  const contJoke = document.querySelector('#jokeContainer')
  contJoke.textContent = msgJ
}

jokeR()