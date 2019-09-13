import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './features/login-form/login-form.component';
import {PublicLayoutComponent} from './layouts/public-layout/public-layout.component';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import { RestrictedLayoutComponent } from './layouts/restricted-layout/restricted-layout.component';
import { AngularTokenService } from 'angular-token';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: PublicLayoutComponent, children: [
      { path: 'home', component: HomeComponent }
      ] },
  { path: '', component: LoginLayoutComponent, children: [
      { path: 'login', component: LoginFormComponent }
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
