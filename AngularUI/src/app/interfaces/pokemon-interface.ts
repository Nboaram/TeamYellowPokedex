export interface PokemonInterface {
    name: string,
    height: number,
    weight: number,
    is_default: boolean,
    base_experience: number
}

export class Pokemon implements PokemonInterface {
    name: string;
    height: number;
    weight: number;
    is_default: boolean;
    base_experience: number;
}
