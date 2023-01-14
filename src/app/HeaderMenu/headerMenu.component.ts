import { Component } from '@angular/core';

@Component({
    selector: 'header-menu',
    templateUrl: 'headerMenu.component.html',
    styleUrls: ['headerMenu.component.scss'],
})
export class headerMenu {

    // ------Main Nav Tab Actions------

    // Navigates user back to Home page
    goHome(): void {
     
        console.log("GO HOME");
    }

    // Navigates user to Leagues page
    goToLeagues() {

        console.log("GO LEAGUES");
    }

    // Navigates user to Drafts page
    goToDrafts() {

        console.log("GO DRAFTS");
    }

    // Navigates user to Pokedex page
    goToDex(): void {

        console.log("GO DEX");
    }

    // ------User Account Button actions below------

    // Takes user to log in page and refreshes previous locations page
    signIn(): void {
       
    }

    // Signs user out and after takes to home page
    signOut(): void {

        this.goHome();
    }

    // Takes user to create account page
    newUser(): void {

    }

    // Takes user to settings page
    goToSettings(): void {

    }

}