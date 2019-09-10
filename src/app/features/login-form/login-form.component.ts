import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public fb: FormBuilder,
              private tokenService: AngularTokenService) {

    this.loginForm = fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onValidateForm() {
    if (this.loginForm.valid) {
      console.log('FORM: ', this.loginForm.value);
      this.tokenService.signIn(this.loginForm.value).subscribe(
        res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      );
    }
  }

}
