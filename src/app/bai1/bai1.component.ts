import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {

  student = {
    name: null,
    date: null,
    gender: null,
    grade: null,
    result: null,
  }
  constructor() { }

  ngOnInit() {

  }
  grade() {
    if (this.student.grade < 5) {
      this.student.result = "Rot"
    } else if (this.student.grade > 5 && this.student.grade < 10) {
      this.student.result = "dau"
    }
  }
}
