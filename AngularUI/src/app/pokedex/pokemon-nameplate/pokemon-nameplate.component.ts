import { Component, OnInit, Input } from '@angular/core';
import { AllPokemonInterface } from 'src/app/interfaces/all-pokemon-interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonInterface, Pokemon } from 'src/app/interfaces/pokemon-interface';

@Component({
  selector: 'app-pokemon-nameplate',
  templateUrl: './pokemon-nameplate.component.html',
  styleUrls: ['./pokemon-nameplate.component.scss']
})
export class PokemonNameplateComponent implements OnInit {

  constructor(private pokeService: PokemonService) { }
  @Input() poke: AllPokemonInterface;
  pokeName;

  pokemon: PokemonInterface;

  ngOnInit() {
    this.pokeName = this.poke.name;
    console.log(this.poke.name);
    this.pokeService.getOnePokemon(this.pokeName).subscribe((x) =>{
      this.pokemon = x;
    })
  }

  name: string = 'pokemon';

}
