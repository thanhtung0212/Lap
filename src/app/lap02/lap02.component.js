import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let Lap02Component = class Lap02Component {
    constructor() {
        this.student = [
            {
                fullName: 'Nguyễn Văn Tèo',
                birthday: '20-01-1999',
                gender: 'Nam',
                photo: 'https://i.pinimg.com/originals/7e/7b/f6/7e7bf68999ed12f4393a2ef81750675b.png',
                mark: 8.5
            }, {
                fullName: 'Phan thị nở',
                birthday: '20-12-1999',
                gender: 'Nữ',
                photo: 'https://i.pinimg.com/originals/7e/7b/f6/7e7bf68999ed12f4393a2ef81750675b.png',
                mark: 8.5
            },
            {
                fullName: 'Nguyễn khá Bảnh',
                birthday: '20-01-2000',
                gender: 'Nam',
                photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/629c1f14015191.5627be627c443.png',
                mark: 8.5
            },
        ];
    }
    ngOnInit() {
    }
};
Lap02Component = tslib_1.__decorate([
    Component({
        selector: 'app-lap02',
        templateUrl: './lap02.component.html',
        styleUrls: ['./lap02.component.css']
    })
], Lap02Component);
export { Lap02Component };
//# sourceMappingURL=lap02.component.js.map