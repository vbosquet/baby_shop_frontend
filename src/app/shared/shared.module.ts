import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})

export class SharedModule {}
