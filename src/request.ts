fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        return  response.results;
    })
    .catch((error) => {
        console.log(error);
    })