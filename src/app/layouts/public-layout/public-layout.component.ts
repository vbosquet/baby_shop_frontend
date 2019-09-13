import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {

  links: any[] = [
    'SIGN_IN',
    'SIGN_UP'
  ];

  constructor() { }

  ngOnInit() {
  }

}
