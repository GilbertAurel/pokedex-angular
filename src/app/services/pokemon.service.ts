import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon } from 'src/app/interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  limit: number = 20;
  offset: number = 0;
  private pokeAPIUrl = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}offset=${this.offset}`;

  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(this.pokeAPIUrl)
      .pipe(map((res: any) => res.results));
  }
}
