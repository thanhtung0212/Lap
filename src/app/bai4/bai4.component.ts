import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {
  items = [
    {
      name: 'Nuoc Ngot',
      price: 10000
    },
    {
      name: 'Ca phe den',
      price: 12000
    },
    {
      name: 'Thuoc la',
      price: 20000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
