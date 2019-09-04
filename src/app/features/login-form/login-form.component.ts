import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean;

  @Output() formSubmit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required]]
    });
    this.hide = true;
  }

  onSubmit() {
    this.formSubmit.emit(this.loginForm.value);
  }

}
