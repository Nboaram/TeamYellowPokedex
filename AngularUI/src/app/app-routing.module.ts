import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './pokedex/search/search.component';
import { PokedexComponent } from './pokedex/pokedex/pokedex.component';


const routes: Routes = [
  {path: 'pokemon', component: SearchComponent},
  {path: 'pokedex', component: PokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
