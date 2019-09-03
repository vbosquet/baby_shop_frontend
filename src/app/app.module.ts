import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { AngularTokenModule } from 'angular-token';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpService } from './shared/services/http.service';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './features/toolbar/toolbar.component';
import { AuthDialogComponent } from './features/auth-dialog/auth-dialog.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    AngularTokenModule.forRoot(
      {
        signInPath: 'auth/sign_in'
      }
    )
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
