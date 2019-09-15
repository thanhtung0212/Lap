import { Component, OnInit } from '@angular/core';
import { students } from '../course'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  config: any;
  list = []


  constructor() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,

    }
  }

  delete(id) {
    // let isDelete = confirm("Are you sure delete this student?")
    if (id) {
      let temp = this.students.filter(student => {
        return student.ID !== id
      })
      this.students = [...temp]
    }
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {
  }
  students = [...students]
}