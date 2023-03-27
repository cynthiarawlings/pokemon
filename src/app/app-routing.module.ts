import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: "", redirectTo: "/sets", pathMatch: "full" },
  //   { path: "sets", component: SetsComponent, children: [
  //       { path: "", component: SetStartComponent },
  //       { path: "new", component: SetEditComponent },
  //       // { path: ":id", component: SetDetailComponent, resolve: [RecipeResolverService] },
  //       // { path: ":id/edit", component: SetEditComponent, resolve: [RecipeResolverService] }
  //   ] }
    // { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
