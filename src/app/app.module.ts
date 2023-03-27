import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SetsComponent } from './sets/sets.component';
import { SetDetailComponent } from './sets/set-detail/set-detail.component';
import { SetEditComponent } from './sets/set-edit/set-edit.component';
import { SetListComponent } from './sets/set-list/set-list.component';
import { SetStartComponent } from './sets/set-start/set-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SetsComponent,
    SetDetailComponent,
    SetEditComponent,
    SetListComponent,
    SetStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
