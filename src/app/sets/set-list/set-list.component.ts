import { Component } from '@angular/core';
import { Subscription } from "rxjs";

import { Set } from '../sets.model';
import { MOCKSETS } from '../MOCKSETS';
import { setService } from '../set.service';
// import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent {
  // sets: Set[] = [];
  sets: Set[] = MOCKSETS;
  private subscription: Subscription;

  constructor(private setService: setService) {

  }

  ngOnInit() {
    console.log(this.sets);
    this.sets = this.setService.getSets();
    this.setService.setChangedEvent.subscribe(
      (sets: Set[]) => {
        this.sets = sets;
      }
    );
    this.subscription = this.setService.setListChangedEvent.subscribe(
      (setsList: Set[]) => {
        this.sets = setsList;
      }
    );
  }

}
