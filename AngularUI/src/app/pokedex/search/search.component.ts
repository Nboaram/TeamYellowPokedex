import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PokemonInterface } from 'src/app/interfaces/pokemon-interface';
import { AllPokemonInterface } from 'src/app/interfaces/all-pokemon-interface';

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

  @Input() poke: AllPokemonInterface;

  pokemon: PokemonInterface;
  allPokemon: AllPokemonInterface;
  pokemonObject: PokemonInterface;
  pokemonKeys: string[];

  findPokemon() {
    let pokemon = this.searchForm.value.name;
    this.allPokemon = null;
    console.log(pokemon);
    this.pokeService.getOnePokemon(pokemon).subscribe((x) =>{
      console.log(x);
      if (x.name) {
        this.pokemon = x;
      }
      console.log(this.pokemon.types[0].type.name);
    });
  }

  findAllPokemon() {
    this.pokemon = null;
    this.pokeService.getAllPokemon().subscribe((x) =>{
      console.log(x);
      this.allPokemon = x;
    });
  }
}
