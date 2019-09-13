import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashbaord/dashboard.component';
import { MyAccountRoutingModule } from './my-account-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MyAccountRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: []
})

export class MyAccountModule {}
