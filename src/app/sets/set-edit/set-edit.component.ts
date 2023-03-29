import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Set } from '../sets.model';
import { setService } from '../set.service';

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
    let newSetPokemonNames = value.newSetPokemonNames;
    const newSet = new Set(value.id, value.name, value.pokemon);
    if (this.editMode) {
      this.setService.updateSet(this.originalSet, newSet);
    }
    else {
      this.setService.addSet(newSet);
    }
    this.router.navigate(['/sets']);
  }

  onDeleteSet(set: Set) {
    console.log(set);
  }

}
