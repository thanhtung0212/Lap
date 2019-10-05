import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {
  hcn = {
    cd: null,
    cr: null,
    cv: null,
    dt: null
  }
  constructor() { }

  ngOnInit() {
  }
  tinh() {
    this.hcn.cv = (this.hcn.cd + this.hcn.cr) * 2;
    this.hcn.dt = this.hcn.cd * this.hcn.cr;
  }
}
