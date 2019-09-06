import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularTokenModule } from 'angular-token';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpService } from './shared/services/http.service';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './features/toolbar/toolbar.component';
import { AuthDialogComponent } from './features/auth-dialog/auth-dialog.component';

import { SharedModule } from './shared/shared.module';
import { LoginFormComponent } from './features/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularTokenModule.forRoot(
      {
        apiBase: null,
        signInPath: 'auth/sign_in'
      }
    ),
    ReactiveFormsModule
  ],
  entryComponents: [
    AuthDialogComponent
  ],
  providers: [
    HttpService,
    AngularTokenModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
