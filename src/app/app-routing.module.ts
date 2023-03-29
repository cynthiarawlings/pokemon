import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetsComponent } from './sets/sets.component';
import { SetEditComponent } from './sets/set-edit/set-edit.component';
import { SetDetailComponent } from './sets/set-detail/set-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/sets", pathMatch: "full" },
  { path: "sets", component: SetsComponent },
  { path: "new", component: SetEditComponent },
  { path: "sets/:id", component: SetDetailComponent },
  { path: "sets/:id/edit", component: SetEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
