import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { SlideMenuModule } from 'primeng/slidemenu';

// MDB Angular Free
import { CheckboxModule,
  WavesModule,
  ButtonsModule,
  InputsModule,
  IconsModule,
  CardsModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    TableModule,
    SlideMenuModule,
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    CardsModule
  ],
  declarations: [],
  exports: [
    TableModule,
    SlideMenuModule,
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    CardsModule
  ]
})

export class SharedModule {}
