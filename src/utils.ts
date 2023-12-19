import { Pokemon } from './models/pokemon.js';

export class CreateNodeElement {


    public geDatasPokemon(): any {
        const pokemonCards = document.querySelector<HTMLElement>('.pokemon-cards')! ;
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            let pokemons = response.results;
            pokemons.map((pokemon: { url: any; }) => {
                fetch(`${pokemon.url}`)
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    let pokemon = new Pokemon(res.name, "50", res.sprites.front_default, "https://pokemoncries.com/cries-old/1.mp3");
                    this.addNodeElement([this.createCard(pokemon)], pokemonCards);
                    })
                }).catch((error: { json: () => any; }) => {
                    console.log(error.json());
                });
            })
            .catch((error) => {
                console.log(error);
        })
    }
    
    public createNodeElement(_element: string, _class: string[],_typesName?:string, _typeData?: string): HTMLElement {
        const element = document.createElement(_element) as HTMLElement;
        _class.forEach(_class => {
            element.classList.add(_class);
        });
        if(_typesName && _typeData) {
            if(_typesName === "textContent") {
                element.textContent = _typeData;
            }
            else if(_typesName === "url") {
                element.style.backgroundImage = `url(${_typeData})`;
            }
            else if(_typesName === "width") {
                element.style.width = `${_typeData}%`;
            }
        }
        return element;
    }

    public addNodeElement(_element: HTMLElement[], _parent: HTMLElement): void {
        _element.forEach(_element => {
            _parent.appendChild(_element);
        });
    }
    
    public createCard(dataPokemon: Pokemon): HTMLElement {
        const divPokemonCard = this.createNodeElement('div', ['pokemon-card'])! as HTMLDivElement;
        const divPokemonCardHeader = this.createNodeElement('div', ['pokemon-card-header'])! as HTMLDivElement;
        const divPokemonCardHeaderImg = this.createNodeElement('div', ['pokemon-card-img'],'url',dataPokemon.picture)! as HTMLElement;
        const divPokemonCardBody = this.createNodeElement('div', ['pokemon-card-body'])! as HTMLDivElement;
        const pokemonCardBodyTitle = this.createNodeElement('h2', ['pokemon-card-body-title'], 'textContent', dataPokemon.name)! as HTMLElement;
        const pokemonCardBodyText = this.createNodeElement('p', ['pokemon-card-body-text'] ,'textContent', dataPokemon.health)! as HTMLElement;
        const divPokemonHealthBar = this.createNodeElement('div', ['pokemon-health-bar-container'])! as HTMLDivElement;
        const divPokemonHealthBarProgress = this.createNodeElement('div', ['pokemon-health-bar'],'width', dataPokemon.health)! as HTMLDivElement;
        const btnPokemonCard = this.createNodeElement('button', ['button','pokemon-card-button'] ,'textContent','Heal Now')! as HTMLButtonElement;
        this.addNodeElement([divPokemonCardHeaderImg], divPokemonCardHeader);
        this.addNodeElement([pokemonCardBodyTitle, pokemonCardBodyText, divPokemonHealthBar, btnPokemonCard], divPokemonCardBody);
        this.addNodeElement([divPokemonHealthBarProgress], divPokemonHealthBar);
        this.addNodeElement([divPokemonCardHeader, divPokemonCardBody], divPokemonCard);
        return divPokemonCard;
    }
}