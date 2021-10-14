import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  @Input() pokemonList!: Pokemon[];
  @Output() selectPokemon = new EventEmitter();
  @Output() loadPokemon = new EventEmitter();
  selectedPokemonId?: number;

  constructor() {}

  onClick(selectedPokemon: Pokemon) {
    this.selectedPokemonId = selectedPokemon.id;
    this.selectPokemon.emit(selectedPokemon);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    const width = event.target.scrollWidth;
    const position = event.target.scrollLeft + event.target.offsetWidth;

    if (width === position) {
      this.loadPokemon.emit();
    }
  }
}
