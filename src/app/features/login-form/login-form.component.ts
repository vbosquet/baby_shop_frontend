import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularTokenService } from 'angular-token';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public fb: FormBuilder,
              private tokenService: AngularTokenService,
              private router: Router) {

    this.loginForm = fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onValidateForm() {
    if (this.loginForm.valid) {
      this.tokenService.signIn(this.loginForm.value).subscribe(
        res => {
          this.router.navigate(['/myaccount']);
          // this.router.navigateByUrl(localStorage.getItem('redirectTo'));
        }, error => {
          console.log(error);
        }
      );
    }
  }

}
