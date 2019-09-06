import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { MatDialog } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);
  isSignIn: boolean;

  private _mobileQueryListener: () => void;

  constructor(public dialog: MatDialog,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private tokenService: AngularTokenService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.isSignIn = this.tokenService.userSignedIn();
  }

  ngOnInit(): void {}

  openDialog(mode: string) {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      width: '800px',
      data: { authMode: mode } });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('MODAL CLOSED');
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
