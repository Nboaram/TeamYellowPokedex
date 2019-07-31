import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PokemonInterface } from 'src/app/interfaces/pokemon-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
  }

  pokemon: PokemonInterface[];
  pokemonObject: PokemonInterface;
  pokemonKeys: string[];

  findPokemon() {
    let pokemon = this.searchForm.value.name;
    console.log(pokemon);
    this.pokeService.getOnePokemon(pokemon).subscribe((x) =>{
      console.log(x);
    });
  }
}
