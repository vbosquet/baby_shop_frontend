import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restricted-layout',
  templateUrl: './restricted-layout.component.html',
  styleUrls: ['./restricted-layout.component.scss']
})
export class RestrictedLayoutComponent implements OnInit {

  links: any[] = [
    'SIGN_OUT'
  ];

  constructor() { }

  ngOnInit() {
  }

}
