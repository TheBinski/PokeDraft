import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { headerMenu } from './HeaderMenu/headerMenu.component';
import { HomeComponent } from './Pages/home/home.component';
import { PokedexComponent } from './Pages/Pokedex/pokedex.component';
import { LeaguesComponent } from './Pages/Leagues/leagues.component';
import { DraftsComponent } from './Pages/Drafts/drafts.component';
import { AccountPageComponent } from './Pages/AccountPage/account-page.component';
import { AboutComponent } from './Pages/About/about.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    headerMenu,
    HomeComponent,
    PokedexComponent,
    LeaguesComponent,
    DraftsComponent,
    AccountPageComponent,
    AboutComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}