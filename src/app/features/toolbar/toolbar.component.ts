import { Component, OnInit } from '@angular/core';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openDialog(mode: string) {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      data: { authMode: mode } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
