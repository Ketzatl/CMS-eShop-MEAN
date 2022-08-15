import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    const enStock: string = 'En Stock';
    const rupture: string = 'Rupture';
  }

  ngOnInit(): void {
  }

}
