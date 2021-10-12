import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import { Pokemon } from 'src/app/interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonDetails: Pokemon[] = [];
  offset: number = 20;
  limit: number = 20;
  initialUrl: string = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}offset=${this.offset}`;
  nextUrl: string = '';

  constructor(private http: HttpClient) {}

  getPokemonUrls(url: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(url).pipe(
      map((res: any) => {
        this.nextUrl = res.next;
        return res.results;
      })
    );
  }

  getPokemonByUrl(url: string, name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url).pipe(
      map((res: any) => ({
        id: res.id,
        name: name,
        url: url,
        details: {
          height: res.height,
          weight: res.weight,
          types: res.types.map((type: any) => type.type.name),
          stats: res.stats.map((stat: any) => ({
            name: stat.stat.name,
            base: stat.base_stat,
          })),
          imageUrl: res.sprites.front_default,
        },
      }))
    );
  }

  getPokemonDetails(type: 'initial' | 'next'): Observable<Pokemon[]> {
    return this.getPokemonUrls(
      type === 'initial' ? this.initialUrl : this.nextUrl
    ).pipe(
      mergeMap((res: any) => {
        const fetchObsList: [Observable<Pokemon>] = res.map((pokemon: any) =>
          this.getPokemonByUrl(pokemon.url, pokemon.name)
        );

        return forkJoin<Pokemon>(fetchObsList);
      })
    );
  }
}
