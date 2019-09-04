import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  authMode: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<any>,
              private tokenService: AngularTokenService) {
    this.authMode = data.authMode;
  }

  ngOnInit() {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onLoginFormSubmit(event: any) {
    this.tokenService.signIn({
      'login': event.email,
      'password': event.password
    }).subscribe(
      res => {
        console.log(res);
        this.dialogRef.close();
      }, error => {
        console.log(error);
        this.dialogRef.close();
      }
    );
  }

}
