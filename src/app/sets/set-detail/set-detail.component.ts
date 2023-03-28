import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Set } from '../sets.model';
import { setService } from '../set.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.css']
})
export class SetDetailComponent {
  set: Set;
  id: string;
  pokemonId: number;
  pokemon: Pokemon;

  constructor(private setService: setService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
        this.set = this.setService.getSet(this.id);
        this.pokemon = this.set.pokemon[0];
        this.pokemonId = 0;
      }
    );
  }

  getPokemon(pokemonId: number) {
    return this.set.pokemon[pokemonId];
  }

  onEditSet() {
    this.router.navigate(["edit"], {relativeTo: this.route});
  }

  previousSlide(pokemonId: number) {
    if (pokemonId == 0) {
      this.pokemonId = this.set.pokemon.length -1;
    }
    else {
      this.pokemonId = pokemonId-1;
    }
    this.pokemon = this.getPokemon(this.pokemonId);
  }

  nextSlide(pokemonId: number) {
    if (pokemonId == this.set.pokemon.length -1) {
      this.pokemonId = 0;
    }
    else {
      this.pokemonId = pokemonId+1;
    }
    this.pokemon = this.getPokemon(this.pokemonId);
  }

}
