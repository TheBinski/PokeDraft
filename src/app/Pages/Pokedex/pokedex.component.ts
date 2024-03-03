import { Component } from '@angular/core';
import { selectFilterOption } from 'src/app/Components/select-filter/select-filter.component';
import { Pokemon } from 'src/app/Datatypes/Pokemon';
import sequelize from 'src/database_scripts/DatabaseConnector';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  searchValue: string = '';

  data = [];

  constructor() {
    
  }

  async ngOnInit() {
    // Read data from database
  }

  // Filter sort options

  defaultInitialSort: selectFilterOption = {
    text: 'Regrion/Gen',
    value: 'gen'
  };

  defaultSortOptions: Array<selectFilterOption> = [
    {
      text: 'Region/Gen',
      value: 'gen'
    },
    {
      text: 'Tier',
      value: 'tier'
    },
  ]

  typeOptions: Array<selectFilterOption> = [
    {
      text: 'Normal',
      value: 'normal'
    },
    {
      text: 'Grass',
      value: 'grass'
    },
    {
      text: 'Water',
      value: 'water'
    },
    {
      text: 'Fire',
      value: 'fire'
    },
    {
      text: 'Electric',
      value: 'electric'
    },
    {
      text: 'Ice',
      value: 'ice'
    },
    {
      text: 'Fighting',
      value: 'fighting'
    },
    {
      text: 'Poison',
      value: 'poison'
    },
    {
      text: 'Ground',
      value: 'ground'
    },
    {
      text: 'Flying',
      value: 'flying'
    },
    {
      text: 'Psychic',
      value: 'psychic'
    },
    {
      text: 'Bug',
      value: 'bug'
    },
    {
      text: 'Rock',
      value: 'rock'
    },
    {
      text: 'Ghost',
      value: 'ghost'
    },
    {
      text: 'Dark',
      value: 'dark'
    },
    {
      text: 'Dragon',
      value: 'dragon'
    },
    {
      text: 'Steel',
      value: 'steel'
    },
    {
      text: 'Fairy',
      value: 'fairy'
    },
  ];

  statSortOptions: Array<selectFilterOption> = [
    {
      text: 'Hp +/-',
      value: '+hp'
    },
    {
      text: 'Hp -/+',
      value: '-hp'
    },
    {
      text: 'Atk +/-',
      value: '+attack'
    },
    {
      text: 'Atk -/+',
      value: '-attack'
    },
    {
      text: 'Def +/-',
      value: '+defense'
    },
    {
      text: 'Def -/+',
      value: '-defense'
    },
    {
      text: 'Sp. Atk +/-',
      value: '+spattack'
    },
    {
      text: 'Sp. Atk -/+',
      value: '-spattack'
    },
    {
      text: 'Sp. Def +/-',
      value: '+spdefense'
    },
    {
      text: 'Sp. Def -/+',
      value: '-spdefense'
    },
    {
      text: 'Speed +/-',
      value: '+speed'
    },
    {
      text: 'Speed -/+',
      value: '-speed'
    },
  ];

  // TEMP DATA FOR TESTING
  pokemon: Array<Pokemon> = [
    {
      dexNum: 1,
      tier: "Uber",
      name: "Bulbasaur",
      type1: "Grass",
      type2: "Poison",
      ability1: "Overgrow",
      ability2: null,
      ability3: "Chlorophyll",
      hp: 45,
      attack: 49,
      defense: 49,
      spAttack: 65,
      spDefense: 65,
      speed: 45,
    },
    {
      dexNum: 4,
      tier: "Uber",
      name: "Charmander",
      type1: "Fire",
      type2: null,
      ability1: "Blaze",
      ability2: null,
      ability3: "Solar Power",
      hp: 39,
      attack: 52,
      defense: 43,
      spAttack: 60,
      spDefense: 50,
      speed: 65,
    },
    {
      dexNum: 7,
      tier: "Uber",
      name: "Squirtle",
      type1: "Water",
      type2: null,
      ability1: "Torrent",
      ability2: null,
      ability3: "Rain Dish",
      hp: 44,
      attack: 48,
      defense: 65,
      spAttack: 50,
      spDefense: 64,
      speed: 43,
    },
  ];

}
