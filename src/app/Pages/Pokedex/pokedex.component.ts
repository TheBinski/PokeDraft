import { Component } from '@angular/core';
import { selectFilterOption } from 'src/app/Components/select-filter/select-filter.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  searchValue: string = '';

  // Filter sort options

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
      text: 'Hp (High to Low)',
      value: '+hp'
    },
    {
      text: 'Hp (Low to High)',
      value: '-hp'
    },
    {
      text: 'Atk (High to Low)',
      value: '+attack'
    },
    {
      text: 'Atk (Low to High)',
      value: '-attack'
    },
    {
      text: 'Def (High to Low)',
      value: '+defense'
    },
    {
      text: 'Def (Low to High)',
      value: '-defense'
    },
    {
      text: 'Sp. Atk (High to Low)',
      value: '+spattack'
    },
    {
      text: 'Sp. Atk (Low to High)',
      value: '-spattack'
    },
    {
      text: 'Sp. Def (High to Low)',
      value: '+spdefense'
    },
    {
      text: 'Sp. Def (Low to High)',
      value: '-spdefense'
    },
    {
      text: 'Speed (High to Low)',
      value: '+speed'
    },
    {
      text: 'Speed (Low to High)',
      value: '-speed'
    },
  ];

}
