import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [SearchComponent, DisplayComponent],
  imports: [
    CommonModule
  ]
})
export class PokedexModule { }
