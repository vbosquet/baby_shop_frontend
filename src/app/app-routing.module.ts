import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './features/login-form/login-form.component';
import {HomeLayoutComponent} from './layouts/home-layout/home-layout.component';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeLayoutComponent, children: [
      { path: 'home', component: HomeComponent }
      ] },
  { path: '', component: LoginLayoutComponent, children: [
      { path: 'login', component: LoginFormComponent }
    ] },
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
