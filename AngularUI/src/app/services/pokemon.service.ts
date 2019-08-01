import { Injectable } from '@angular/core';
import { DataRequestService } from './data-request.service';
import { Observable } from 'rxjs';
import { PokemonInterface } from '../interfaces/pokemon-interface';
import { send } from 'q';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private req: DataRequestService) { }

  getOnePokemon(name: string): Observable<PokemonInterface> {
    return this.req.get<PokemonInterface>(this.req.url + '/pokemon/' + name);
  }

  getAllPokemon(): Observable<PokemonInterface> { 
    return this.req.get<PokemonInterface>(this.req.url + '/pokemon?offset=0&limit=964');
  } 

}
