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
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    LoginFormComponent,
    HomeLayoutComponent,
    LoginLayoutComponent
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
        apiBase: null,
        signInPath: 'auth/sign_in',
        signOutPath: 'auth/sign_out',
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
