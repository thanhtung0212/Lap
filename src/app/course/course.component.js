import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { students } from '../course';
let CourseComponent = class CourseComponent {
    // students = [
    //   { ID: 1, FirstMidName: "Carson", LastName: "Alexander", EnrollmentDate: "2005-09-01" }, { ID: 2, FirstMidName: "Meredith", LastName: "Alonso", EnrollmentDate: "2002-09-01" }, { ID: 3, FirstMidName: "Arturo", LastName: "Anand", EnrollmentDate: "2003-09-01" }, { ID: 4, FirstMidName: "Gytis", LastName: "Barzdukas", EnrollmentDate: "2002-09-01" }, { ID: 5, FirstMidName: "Yan", LastName: "Li", EnrollmentDate: "2002-09-01" }, { ID: 6, FirstMidName: "Peggy", LastName: "Justice", EnrollmentDate: "2001-09-01" },
    //   { ID: 7, FirstMidName: "Laura", LastName: "Norman", EnrollmentDate: "2003-09-01" }, { ID: 8, FirstMidName: "Nino", LastName: "Olivetto", EnrollmentDate: "2005-09-01" }
    // ];
    constructor(route) {
        this.route = route;
        this.students = [...students];
    }
    ngOnInit() {
    }
};
CourseComponent = tslib_1.__decorate([
    Component({
        selector: 'app-course',
        templateUrl: './course.component.html',
        styleUrls: ['./course.component.css']
    })
], CourseComponent);
export { CourseComponent };
//# sourceMappingURL=course.component.js.map