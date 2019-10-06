import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { students, enrollments, courses } from '../course';
let DetailcourseComponent = class DetailcourseComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        // this.route.paramMap.subscribe(param => {
        //   const id = parseInt(param.get('ID'))
        //   this.student = students.filter(student => {
        //     return this.student.ID = id;
        //   })[0];
        // });
        this.route.paramMap.subscribe(params => {
            const id = parseInt(params.get('ID'));
            this.student = students.find(student => student.ID == id);
            this.grade = courses.map(course => {
                enrollments.map((en) => {
                    if (en.CourseID === course.CourseID) {
                        return students.find(item => item.ID == id);
                    }
                });
            });
            console.log('------ result', this.grade);
        });
        // console.log(this.student)
    }
};
DetailcourseComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detailcourse',
        templateUrl: './detailcourse.component.html',
        styleUrls: ['./detailcourse.component.css']
    })
], DetailcourseComponent);
export { DetailcourseComponent };
//# sourceMappingURL=detailcourse.component.js.map