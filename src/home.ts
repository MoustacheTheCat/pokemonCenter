import { Pokemon } from './models/pokemon.js';
const pokemonCards = document.querySelector<HTMLElement>('.pokemon-cards')!;


function creatCard(dataPokemon: Pokemon){
    const divPokemonCard = document.createElement('div') ! as HTMLDivElement;
    divPokemonCard.classList.add('pokemon-card');

    const divPokemonCardHeader = document.createElement('div') ! as HTMLDivElement;
    divPokemonCardHeader.classList.add('pokemon-card-header');

    const divPokemonCardHeaderImg = document.createElement('div') ! as HTMLDivElement;
    
    divPokemonCardHeaderImg.style.backgroundImage = `url(${dataPokemon.picture})`;
    divPokemonCardHeaderImg.classList.add('pokemon-card-img');

    const divPokemonCardBody = document.createElement('div') ! as HTMLDivElement;
    divPokemonCardBody.classList.add('pokemon-card-body');

    const pokemonCardBodyTitle = document.createElement('h2') ! as HTMLElement;
    pokemonCardBodyTitle.classList.add('pokemon-card-body-title');
    pokemonCardBodyTitle.textContent = dataPokemon.name;

    const pokemonCardBodyText = document.createElement('p') ! as HTMLElement;
    pokemonCardBodyText.classList.add('pokemon-card-body-text');
    pokemonCardBodyText.textContent = dataPokemon.health;

    const divPokemonHealthBar = document.createElement('div') ! as HTMLDivElement;
    divPokemonHealthBar.classList.add('pokemon-health-bar-container');

    const divPokemonHealthBarProgress = document.createElement('div') ! as HTMLDivElement;
    divPokemonHealthBarProgress.style.width = `${dataPokemon.health}%`;
    divPokemonHealthBarProgress.classList.add('pokemon-health-bar');
    divPokemonHealthBar.appendChild(divPokemonHealthBarProgress);

    const btnPokemonCard = document.createElement('button') ! as HTMLButtonElement;
    btnPokemonCard.classList.add('pokemon-card-button');
    btnPokemonCard.classList.add('button');
    btnPokemonCard.textContent = 'Heal Now';

    divPokemonCardHeader.appendChild(divPokemonCardHeaderImg);
    divPokemonCardBody.appendChild(pokemonCardBodyTitle);
    divPokemonCardBody.appendChild(pokemonCardBodyText);
    divPokemonCardBody.appendChild(divPokemonHealthBar);
    divPokemonCardBody.appendChild(btnPokemonCard);

    divPokemonCard.appendChild(divPokemonCardHeader);
    divPokemonCard.appendChild(divPokemonCardBody);

    return divPokemonCard;
}  


const pokemonDatas = [
    {
        pokemonName: "Lucky",
        pokemonHealth: "100",
        pokemonImg: "https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786820ovzo0.png",
        pokemonCri: "https://pokemoncries.com/cries-old/1.mp3",
      },
      {
        pokemonName: "Symba",
        pokemonHealth: "50",
        pokemonImg: "https://pngimg.com/uploads/pokemon/pokemon_PNG49.png",
        pokemonCri: "https://pokemoncries.com/cries-old/1.mp3",
      },
      {
        pokemonName: "Léo",
        pokemonHealth: "80",   
        pokemonImg: "https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784845bdjl3.png",    
        pokemonCri: "https://pokemoncries.com/cries-old/1.mp3",
    },
      {
        pokemonName: "Milo",
        pokemonHealth: "30",
        pokemonImg: "https://pngimg.com/uploads/pokemon/pokemon_PNG151.png",    
        pokemonCri: "https://pokemoncries.com/cries-old/1.mp3",
      },
      {
        pokemonName: "Charly",
        pokemonHealth: "30",
        pokemonImg: "https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786841sy02u.png",
        pokemonCri: "https://pokemoncries.com/cries-old/1.mp3",
      }
    ];




pokemonDatas.forEach((pokemonData) => {
    let pokemon = new Pokemon(pokemonData['pokemonName'], pokemonData['pokemonHealth'], pokemonData['pokemonImg'], pokemonData['pokemonCri']);
    let pokemonCard = creatCard(pokemon);
    pokemonCards.appendChild(pokemonCard);
});


