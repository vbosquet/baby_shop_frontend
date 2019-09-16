import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularTokenModule } from 'angular-token';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HttpService } from './shared/services/http.service';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './features/toolbar/toolbar.component';

import { SharedModule } from './shared/shared.module';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RestrictedLayoutComponent } from './layouts/restricted-layout/restricted-layout.component';
import { RegisterFormComponent } from './features/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    LoginFormComponent,
    PublicLayoutComponent,
    AuthLayoutComponent,
    RestrictedLayoutComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AngularTokenModule.forRoot(
      {
        apiBase: 'http://localhost:3000',
        signInPath: 'auth/sign_in',
        signOutPath: 'auth/sign_out',
        signInRedirect: '/home',
        signInStoredUrlStorageKey: 'redirectTo',
        registerAccountPath: 'auth'
      }
    ),
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [],
  providers: [
    HttpService,
    AngularTokenModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
