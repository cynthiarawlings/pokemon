import { Pokemon } from "./pokemon.model";

export class Set {
    // public _id: string;
    public id: string;
    public name: string;
    public pokemon: Pokemon[];

    constructor(id: string, name: string, pokemon: Pokemon[]) {
        // this._id = _id;
        this.id = id;
        this.name = name;
        this.pokemon = pokemon;
    }
}