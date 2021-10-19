import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from 'src/app/interfaces/pokemon';

import { PokemonDetailsComponent } from './pokemon-details.component';

const mockPokemon: Pokemon = {
  id: 0,
  name: '',
  url: '',
  details: {
    height: 0,
    weight: 0,
    imageUrl: '',
    stats: [
      { base: 0, name: '' },
      { base: 0, name: '' },
      { base: 0, name: '' },
    ],
    types: ['', ''],
  },
};

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render no pokemon initially', () => {
    const elements: HTMLElement = fixture.nativeElement;
    expect(elements.querySelector('[data-test="empty-alert"]')).toBeTruthy();
  });

  it('should render out pokemon data, with 2 types and 3 stats', () => {
    component.pokemon = mockPokemon;
    fixture.detectChanges();

    const elements: HTMLElement = fixture.nativeElement;
    expect(elements.querySelector('[data-test="image"]')).toBeTruthy();
    expect(elements.querySelector('[data-test="name"]')).toBeTruthy();
    expect(elements.querySelectorAll('[data-test="types"]')).toHaveSize(2);
    expect(elements.querySelector('[data-test="height"]')).toBeTruthy();
    expect(elements.querySelector('[data-test="weight"]')).toBeTruthy();
    expect(elements.querySelectorAll('[data-test="stats"]')).toHaveSize(3);
  });
});
