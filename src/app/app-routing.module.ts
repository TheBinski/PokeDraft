import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/About/about.component';
import { AccountPageComponent } from './Pages/AccountPage/account-page.component';
import { AccountLoginComponent } from './Pages/AccountPage/Login/account-login.component';
import { AccountSignupComponent } from './Pages/AccountPage/SignUp/account-signup.component';
import { AccountSettingsComponent } from './Pages/AccountPage/Settings/account-settings.component';
import { DraftsComponent } from './Pages/Drafts/drafts.component';
import { HomeComponent } from './Pages/home/home.component';
import { LeaguesComponent } from './Pages/Leagues/leagues.component';
import { PokedexComponent } from './Pages/Pokedex/pokedex.component';
import { AccountPasswordResetComponent } from './Pages/AccountPage/PasswordReset/account-passwordReset.component';

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
    path: 'account/settings',
    component: AccountSettingsComponent
  },
  {
    path: 'account/login',
    component: AccountLoginComponent
  },
  {
    path: 'account/signup',
    component: AccountSignupComponent
  },
  {
    path: 'account/reset',
    component: AccountPasswordResetComponent
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