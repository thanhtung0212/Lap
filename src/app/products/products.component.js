import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { listproducts } from '../product';
let ProductsComponent = class ProductsComponent {
    constructor() {
        this.isEdit = true;
        this.page = 1;
        // listproducts =
        //   [
        //     {
        //       "productId": 1,
        //       "productName": "Leaf Rake",
        //       "productCode": "GDN-0011",
        //       "releaseDate": "March 19, 2016",
        //       "description": "Leaf rake with 48-inch wooden handle.",
        //       "price": 19.95,
        //       "starRating": 3.2,
        //       "imageUrl": "assets/images/1.jpg"
        //     },
        //     {
        //       "productId": 2,
        //       "productName": "Garden Cart",
        //       "productCode": "GDN-0023",
        //       "releaseDate": "March 18, 2016",
        //       "description": "15 gallon capacity rolling garden cart",
        //       "price": 32.99,
        //       "starRating": 4.2,
        //       "imageUrl": "assets/images/2.jpeg"
        //     },
        //     {
        //       "productId": 5,
        //       "productName": "Hammer",
        //       "productCode": "TBX-0048",
        //       "releaseDate": "May 21, 2016",
        //       "description": "Curved claw steel hammer",
        //       "price": 8.9,
        //       "starRating": 4.8,
        //       "imageUrl": "assets/images/1.jpg"
        //     },
        //     {
        //       "productId": 8,
        //       "productName": "Saw",
        //       "productCode": "TBX-0022",
        //       "releaseDate": "May 15, 2016",
        //       "description": "15-inch steel blade hand saw",
        //       "price": 11.55,
        //       "starRating": 3.7,
        //       "imageUrl": "assets/images/2.jpeg"
        //     },
        //     {
        //       "productId": 10,
        //       "productName": "Video Game Controller",
        //       "productCode": "GMG-0042",
        //       "releaseDate": "October 15, 2015",
        //       "description": "Standard two-button video game controller",
        //       "price": 35.95,
        //       "starRating": 4.6,
        //       "imageUrl": "assets/images/1.jpg"
        //     },
        //   ];
        this.detail = {
            code: '',
            name: '',
            date: '',
            description: '',
            price: '',
            star: '',
            img: '',
        };
        this.listproducts = [...listproducts];
    }
    onclick() {
        window.history.back();
    }
    toggleEdit() {
        this.isEdit = !this.isEdit;
    }
    showModal(name, code, date, price, description, star, img) {
        this.detail.code = code;
        this.detail.name = name;
        this.detail.date = date;
        this.detail.price = price;
        this.detail.description = description;
        this.detail.star = star;
        this.detail.img = img;
    }
    ngOnInit() {
    }
};
ProductsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css']
    })
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map