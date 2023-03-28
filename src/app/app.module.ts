import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SetsComponent } from './sets/sets.component';
import { SetDetailComponent } from './sets/set-detail/set-detail.component';
import { SetEditComponent } from './sets/set-edit/set-edit.component';
import { SetListComponent } from './sets/set-list/set-list.component';
import { SetItemComponent } from './sets/set-item/set-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SetsComponent,
    SetDetailComponent,
    SetEditComponent,
    SetListComponent,
    SetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
