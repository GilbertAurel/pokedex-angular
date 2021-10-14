import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  @Input() pokemonList!: Pokemon[];
  @Output() selectPokemon = new EventEmitter();
  selectedPokemonId?: number;

  constructor() {}

  onClick(selectedPokemon: Pokemon) {
    this.selectedPokemonId = selectedPokemon.id;
    this.selectPokemon.emit(selectedPokemon);
  }
}
