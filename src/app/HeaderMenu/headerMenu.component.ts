import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-menu',
    templateUrl: 'headerMenu.component.html',
    styleUrls: ['headerMenu.component.scss'],
})
export class headerMenu {

    selected: any = '';
    constructor(private router: Router) {}

    // Resets the header menu toggle to none selected
    menuReset(): void {
        this.selected = '';
    }

    // ------Main Nav Tab Actions------

    // Navigates user back to Home page
    goHome(): void {
        this.menuReset();
        this.router.navigate(['/home']);
    }

    // Navigates user to Leagues page
    goToLeagues() {
        this.router.navigate(['/leagues']);
    }

    // Navigates user to Drafts page
    goToDrafts() {
        this.router.navigate(['/drafts']);
    }

    // Navigates user to Pokedex page
    goToDex(): void {
        this.router.navigate(['/pokedex']);
    }

    // Navigates user to Pokedex page
    goToAbout(): void {
        this.router.navigate(['/about']);
    }

    // ------User Account Button actions below------

    // Takes user to log in page and refreshes previous locations page
    signIn(): void {
        this.menuReset();
        this.router.navigate(['/account']);
    }

    // Signs user out and after takes to home page
    signOut(): void {
        this.menuReset();
        this.router.navigate(['/account']);
    }

    // Takes user to create account page
    newUser(): void {       
        this.menuReset();
        this.router.navigate(['/account']);
    }

    // Takes user to settings page
    goToSettings(): void {
        this.menuReset();
        this.router.navigate(['/account']);
    }

}