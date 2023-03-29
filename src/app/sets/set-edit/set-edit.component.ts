import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Set } from '../sets.model';
import { setService } from '../set.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-set-edit',
  templateUrl: './set-edit.component.html',
  styleUrls: ['./set-edit.component.css']
})
export class SetEditComponent {
  id: string;
  originalSet: Set;
  set: Set;
  editMode: boolean = false;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private setService: setService, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
        if (!this.id) {
          this.editMode = false;
          return;
        }
        this.originalSet = this.setService.getSet(this.id);
        if (!this.originalSet) {
          return;
        }
        this.editMode = true;
        this.set = JSON.parse(JSON.stringify(this.originalSet));
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value);
    // const value = form.value;
    // let newSetPokemonNames = value.newSetPokemonNames;
    // const newSet = new Set(value.id, value.name, value.pokemon);
    // if (this.editMode) {
    //   this.setService.updateSet(this.originalSet, newSet);
    // }
    // else {
    //   this.setService.addSet(newSet);
    // }
    // this.router.navigate(['/sets']);
  }

  onDeleteSet(set: Set) {
    console.log(set);
  }

  onSearch(form: NgForm) {
    document.getElementById("search-info").textContent = "Loading, please wait...";
    const value = form.value;
    let pokemonResults: Pokemon[] = [];
    // Search by Type
    let typeFilteredPokemon = [];
    let searchUrl = "//pokeapi.co/api/v2/type/" + value.searchType;
    fetch(searchUrl)
      .then((response) => response.json())
      .then((info) => {
        for (let i = 0, len = info.pokemon.length; i < len; i++) {
          let typePokemon = info.pokemon[i].pokemon.name;
          typeFilteredPokemon.push(typePokemon);
        }
        for (let i = 0, len = typeFilteredPokemon.length; i < len; i++) {
          let searchUrl = "https://pokeapi.co/api/v2/pokemon/" + typeFilteredPokemon[i];
          fetch(searchUrl)
            .then((response) => response.json())
            .then((info) => {
              let name = info.name;
              let type = info.types[0].type.name;
              let url = info.sprites.other["official-artwork"].front_default;
              let pokemon = new Pokemon(name, type, url);
              pokemonResults.push(pokemon);
            });
        }
        console.log(pokemonResults);
        document.getElementById("search-info").textContent = "";
      });

  }

}
