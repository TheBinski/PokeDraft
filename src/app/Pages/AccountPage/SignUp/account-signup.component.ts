import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-signup',
  templateUrl: './account-signup.component.html',
  styleUrls: ['./account-signup.component.scss']
})
export class AccountSignupComponent {

  constructor(private router: Router) {}

  doneAction() {

      let username = (<HTMLInputElement>document.getElementById("username")).value;
      let email = (<HTMLInputElement>document.getElementById("email")).value;
      let pass = (<HTMLInputElement>document.getElementById("pass1")).value;
      let passConfirm = (<HTMLInputElement>document.getElementById("pass2")).value;

      // Check for duplicate username and email

      // let query = Look for email

      // if (query) {
      //   Display that there is already an account with that Email
      //   return;
      // }

      // query = Look for username

      // if (query) {
      //   Display that the username is already taken
      //   return;
      // }

      // Check to make sure that password follows rules
      if (pass.length < 8) {
        // Make this display the issue to user
        console.log("Password not long enough");
        return;
      }

      let passCapitalCheck: boolean = false;
      let passNumberCheck: boolean = false;

      for ( let i = 0; i < pass.length; i++ ) {
        let character: any = pass.charAt(i);

        if (!isNaN(character * 1)) {
          passNumberCheck = true;
        } else if (character == character.toUpperCase()) {
          passCapitalCheck = true;
        }
        
        //Breaks early if both checks are already true
        if (passNumberCheck && passCapitalCheck) {
          break;
        }
      }

      if (!passNumberCheck || !passCapitalCheck) {
        // Display this better to user
        console.log("Password needs either a Number or a Capital Letter");
        return;
      }

      // Check to make sure that passwords match

      if (pass != passConfirm) {
        // Display this better to user
        console.log("Passwords don't match");
        return;
      }

      // POST to database new user and log the user in returning them to home page

      // this.router.navigate(['/home']);
    
  }

  cancelAction() {
    this.router.navigate(['/account/login']);
  }
}
