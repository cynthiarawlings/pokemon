import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Set } from '../sets.model';
import { setService } from '../set.service';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.css']
})
export class SetDetailComponent {
  set: Set;
  id: string;

  constructor(private setService: setService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
        this.set = this.setService.getSet(this.id);
      }
    );
  }

  onEditSet() {
    this.router.navigate(["edit"], {relativeTo: this.route});
  }

  onDelete() {
    this.setService.deleteSet(this.set);
    this.router.navigate(["sets"], {relativeTo: this.route});
  }

}
