import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss']
})
export class AccountLoginComponent {
    constructor(private router: Router) {}

    login() {
      this.router.navigate(['/home']);
    }

    navCreateAccount() {
      this.router.navigate(['/account/signup']);
    }

    navPassReset() {
      this.router.navigate(['/account/reset']);
    }
}
