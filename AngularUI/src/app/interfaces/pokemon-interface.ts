import { TypesInterface } from 'src/app/interfaces/types-interface';

export interface PokemonInterface {
    name: string,
    height: number,
    weight: number,
    is_default: boolean,
    base_experience: number,
    types: TypesInterface
}

export class Pokemon implements PokemonInterface {
    types: TypesInterface;
    name: string;
    height: number;
    weight: number;
    is_default: boolean;
    base_experience: number;
}
