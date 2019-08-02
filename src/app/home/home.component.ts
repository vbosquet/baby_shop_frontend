import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[];

  constructor(private httpServive: HttpService) { }

  ngOnInit() {
    this.httpServive.get('api/products').subscribe(data => {
      this.products = data;
    });
  }

}
