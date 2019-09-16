import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(public fb: FormBuilder,
              private tokenService: AngularTokenService,
              private router: Router) {
    this.registerForm = fb.group({
      name: ['', Validators.required],
      login: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // passwordConfirmation: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onValidateForm() {
    this.tokenService.registerAccount(this.registerForm.value).subscribe(
      res =>      this.router.navigate(['/myaccount']),
      error =>    console.log(error)
    );
  }

}
