import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNameplateComponent } from './pokemon-nameplate.component';

describe('PokemonNameplateComponent', () => {
  let component: PokemonNameplateComponent;
  let fixture: ComponentFixture<PokemonNameplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonNameplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNameplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
