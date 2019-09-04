import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [],
  exports: [
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})

export class SharedModule {}
