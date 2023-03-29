import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SetsComponent } from './sets/sets.component';
import { SetDetailComponent } from './sets/set-detail/set-detail.component';
import { SetEditComponent } from './sets/set-edit/set-edit.component';
import { SetListComponent } from './sets/set-list/set-list.component';
import { SetItemComponent } from './sets/set-item/set-item.component';
import { PokemonDetailComponent } from './sets/pokemon-detail/pokemon-detail.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonItemComponent } from './sets/pokemon-item/pokemon-item.component';
import { PokemonResultComponent } from './sets/pokemon-result/pokemon-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SetsComponent,
    SetDetailComponent,
    SetEditComponent,
    SetListComponent,
    SetItemComponent,
    PokemonDetailComponent,
    FooterComponent,
    PokemonItemComponent,
    PokemonResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
