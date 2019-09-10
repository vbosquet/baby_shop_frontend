import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isSignIn: boolean;

  constructor(private tokenService: AngularTokenService,
              private router: Router) {

    this.isSignIn = this.tokenService.userSignedIn();
  }

  ngOnInit(): void {}

  signOut() {
    this.tokenService.signOut().subscribe(
      res =>  this.router.navigate(['/home']),
      error => console.log(error)
    );
  }

}
