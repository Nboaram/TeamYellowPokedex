import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonNameplateComponent } from './pokemon-nameplate/pokemon-nameplate.component';



@NgModule({
  declarations: [SearchComponent, PokedexComponent, PokemonNameplateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent
  ],
  providers: [
    PokemonService
  ]
})
export class PokedexModule { }
