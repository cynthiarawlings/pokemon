import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { Set } from '../sets.model';

@Component({
  selector: 'app-pokemon-result',
  templateUrl: './pokemon-result.component.html',
  styleUrls: ['./pokemon-result.component.css']
})
export class PokemonResultComponent {
  @Input() pokemon: Pokemon;
  @Input() index: number;
}
