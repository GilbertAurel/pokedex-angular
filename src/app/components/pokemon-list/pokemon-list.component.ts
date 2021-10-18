import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ListService } from 'src/app/services/list.service';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements AfterViewInit, OnDestroy {
  @Input() pokemonList!: Pokemon[];
  @Output() selectPokemon = new EventEmitter();
  @Output() loadPokemon = new EventEmitter();
  @ViewChild('list') listElement!: ElementRef;
  @ViewChild('prevBtn') prevBtn!: ElementRef;
  @ViewChild('nextBtn') nextBtn!: ElementRef;
  prevBtnSubscription!: Subscription;
  nextBtnSubscription!: Subscription;
  selectedPokemonId?: number;

  constructor(private listService: ListService) {}

  ngAfterViewInit() {
    this.prevBtnSubscription = this.listService.prevBtnClicked(
      this.prevBtn,
      this.listElement
    );
    this.nextBtnSubscription = this.listService.nextBtnClicked(
      this.nextBtn,
      this.listElement
    );
  }

  onPokemonClick(selectedPokemon: Pokemon) {
    this.selectedPokemonId = selectedPokemon.id;
    this.selectPokemon.emit(selectedPokemon);
  }

  @HostListener('scroll', ['$event'])
  onAtTheEndOfScroll(event: any) {
    const width = event.target.scrollWidth;
    const position = event.target.scrollLeft + event.target.offsetWidth;

    if (width === position) {
      this.loadPokemon.emit();
    }
  }

  ngOnDestroy() {
    this.prevBtnSubscription.unsubscribe();
    this.nextBtnSubscription.unsubscribe();
  }
}
