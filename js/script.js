// DOM ELEMENT
const jokeButton = document.querySelector('.get-joke-button');
const jokeContainer = document.querySelector('.joke-container');

const fetchJoke = async() => {
	try{
	const response = await fetch('https://api.chucknorris.io/jokes/random');
	const data = await response.json();
	return data.value
	} catch (error){
		console.log('Error!', error);
	}

}

const renderJoke = async ()=> {

	jokeContainer.textContent= ' Loading Joke';
   const joke = await fetchJoke();
	jokeContainer.textContent = joke;
	
}

jokeButton.addEventListener('click', renderJoke);

fetchJoke();

