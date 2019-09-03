import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
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
