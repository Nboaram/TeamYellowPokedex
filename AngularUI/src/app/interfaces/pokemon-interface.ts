import { TypesInterface } from 'src/app/interfaces/types-interface';
import { SpritesInterface } from './sprites-interface';
import { StatsInterface } from './stats-interface';

export interface PokemonInterface {
    name: string,
    height: number,
    weight: number,
    is_default: string,
    base_experience: number,
    types: TypesInterface,
    sprites: SpritesInterface,
    stats: StatsInterface
}

export class Pokemon implements PokemonInterface {
    stats: StatsInterface;
    sprites: SpritesInterface;
    types: TypesInterface;
    name: string;
    height: number;
    weight: number;
    is_default: string;
    base_experience: number;
}
