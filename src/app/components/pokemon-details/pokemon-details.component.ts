import { Component, Input } from '@angular/core';

import { Pokemon } from 'src/app/interfaces/pokemon';
import { TYPES } from 'src/app/data/types';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  @Input() pokemon!: Pokemon;
  types = TYPES;

  constructor() {}
}
