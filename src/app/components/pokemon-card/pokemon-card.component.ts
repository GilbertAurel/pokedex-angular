import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Output() selectPokemon = new EventEmitter();

  constructor() {}

  onClick() {
    this.selectPokemon.emit(this.pokemon);
  }
}
