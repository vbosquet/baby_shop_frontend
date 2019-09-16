import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './features/login-form/login-form.component';
import {PublicLayoutComponent} from './layouts/public-layout/public-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import { RestrictedLayoutComponent } from './layouts/restricted-layout/restricted-layout.component';
import { AngularTokenService } from 'angular-token';
import { RegisterFormComponent } from './features/register-form/register-form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: PublicLayoutComponent, children: [
      { path: 'home', component: HomeComponent }
      ] },
  { path: '', component: AuthLayoutComponent, children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent }
    ] },
  { path: '', component: RestrictedLayoutComponent, canActivate: [AngularTokenService], children: [
      { path: 'myaccount', loadChildren: './features/my-account/my-account.module#MyAccountModule' }
    ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
