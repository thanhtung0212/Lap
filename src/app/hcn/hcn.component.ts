import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-hcn',
  templateUrl: './hcn.component.html',
  styleUrls: ['./hcn.component.css']
})
export class HCNComponent implements OnInit {
  hcn = {
    cd: null,
    cr: null,
    cv: null,
    dt: null
  }
  student = {
    name: null,
    date: null,
    gender: null,
    grade: null,
    result: null,
  }
  tuoi = [
    {
      age: "Duoi 25",
      rate: 0.07,
    },
    {
      age: "Tu 25 den 40",
      rate: 0.1,
    },
    {
      age: "Tren 40",
      rate: 0.15,
    }
  ]

  // rate = this.tuoi;
  nv = {
    luong: null,
    rate: null,

  }
  constructor() { }

  tong() {
    this.nv.luong = this.nv.rate

    console.log()

  }
  ngOnInit() {
  }
  grade() {
    if (this.student.grade < 5) {
      this.student.result = "Rot"
    } else if (this.student.grade > 5 && this.student.grade < 10) {
      this.student.result = "dau"
    }
  }
  tinh() {
    this.hcn.cv = (this.hcn.cd + this.hcn.cr) * 2;
    this.hcn.dt = this.hcn.cd * this.hcn.cr;
  }

}
