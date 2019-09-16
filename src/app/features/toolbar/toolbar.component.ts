import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isSignIn: boolean;
  @Input() links: any[];

  constructor(private tokenService: AngularTokenService,
              private router: Router) {

    this.isSignIn = this.tokenService.userSignedIn();
  }

  ngOnInit(): void {}

  getActionLabel(action: string): string {
    return TOOLBAR_LINKS[action] || '';
  }

  executeAction(action: string): void {
    switch (action) {
      case 'SIGN_IN':
        this.router.navigate(['/login']);
        break;
      case 'SIGN_UP':
        this.router.navigate(['/register']);
        break;
      case 'SIGN_OUT':
        this.signOut();
        break;
    }
  }

  signOut(): void {
    this.tokenService.signOut().subscribe(
      res =>  {
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      }
    );
  }

}

export enum TOOLBAR_LINKS {
  SIGN_IN = 'Sign in',
  SIGN_UP = 'Sign up',
  SIGN_OUT = 'Sign out'
}
