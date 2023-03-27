import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetResolverService } from './set-resolver.service';
import { SetsComponent } from './sets/sets.component';
import { SetStartComponent } from './sets/set-start/set-start.component';
import { SetEditComponent } from './sets/set-edit/set-edit.component';
import { SetDetailComponent } from './sets/set-detail/set-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/sets", pathMatch: "full" },
    { path: "sets", component: SetsComponent, children: [
        { path: "", component: SetStartComponent },
        { path: "new", component: SetEditComponent },
        { path: ":id", component: SetDetailComponent, resolve: [SetResolverService] },
        { path: ":id/edit", component: SetEditComponent, resolve: [SetResolverService] }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
