const jokeButton = document.querySelector('.get-joke-button');
const jokeContainer = document.querySelector('.joke-container');

const fetchJoke = async ()=> {
	const response = await fetch ('https://api.chucknorris.io/jokes/random');
	const data = await response.json();
	renderJoke(data.value)
	console.log(data.value);
}

fetchJoke()