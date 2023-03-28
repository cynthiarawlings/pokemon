import { Set } from './sets.model';

export const MOCKSETS: Set[] = [
  {
    id: "0",
    name: "Grass",
    pokemon: [
      {
        name: "Bulbasaur",
        type: "grass",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      },
      {
        name: "Ivysaur",
        type: "grass",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
      },
      {
        name: "Venusaur",
        type: "grass",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
      }
    ]
  },
  {
    id: "1",
    name: "Fire",
    pokemon: [
      {
        name: "Charmander",
        type: "fire",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      },
      {
        name: "Charmeleon",
        type: "fire",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
      },
      {
        name: "Charizard",
        type: "fire",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
      }
    ]
  },
  {
    id: "2",
    name: "Water",
    pokemon: [
      {
        name: "Squirtle",
        type: "water",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
      },
      {
        name: "Wartortle",
        type: "water",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
      },
      {
        name: "Blastoise",
        type: "water",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
      }
    ]
  }
];
