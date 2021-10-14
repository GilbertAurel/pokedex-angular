import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  selectedPokemon?: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService
      .getPokemonDetails('initial')
      .subscribe((res) => (this.pokemonList = res));
  }

  selectPokemon(selectedPokemon: Pokemon) {
    this.selectedPokemon = selectedPokemon;
  }

  loadPokemon() {
    this.pokemonService
      .getPokemonDetails('next')
      .subscribe((res) => (this.pokemonList = [...this.pokemonList, ...res]));
  }
}
