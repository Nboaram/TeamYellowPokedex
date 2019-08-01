import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './pokedex/search/search.component';
import { PokedexModule } from './pokedex/pokedex.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonNameplateComponent } from './pokedex/pokemon-nameplate/pokemon-nameplate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokedexModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
