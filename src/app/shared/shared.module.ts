import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { TableModule } from 'primeng/table';
import { SlideMenuModule } from 'primeng/slidemenu';

@NgModule({
  imports: [
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    TableModule,
    SlideMenuModule
  ],
  declarations: [],
  exports: [
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    TableModule,
    SlideMenuModule
  ]
})

export class SharedModule {}
