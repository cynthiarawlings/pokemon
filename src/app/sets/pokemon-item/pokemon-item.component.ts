import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent {
  @Input() pokemon: Pokemon;
  @Input() index: number;

  onRemove(pokemon: Pokemon) {
    console.log(pokemon);
  }
}
