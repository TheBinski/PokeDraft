import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/About/about.component';
import { AccountPageComponent } from './Pages/AccountPage/account-page.component';
import { DraftsComponent } from './Pages/Drafts/drafts.component';
import { HomeComponent } from './Pages/home/home.component';
import { LeaguesComponent } from './Pages/Leagues/leagues.component';
import { PokedexComponent } from './Pages/Pokedex/pokedex.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'account',
    component: AccountPageComponent
  },
  {
    path: 'drafts',
    component: DraftsComponent
  },
  {
    path: 'leagues',
    component: LeaguesComponent
  },
  {
    path: 'pokedex',
    component: PokedexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }