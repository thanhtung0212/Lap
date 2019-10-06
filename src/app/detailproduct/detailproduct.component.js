import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { listproducts } from '../product';
let DetailproductComponent = class DetailproductComponent {
    constructor(router) {
        this.router = router;
        this.pageTitle = '';
    }
    ngOnInit() {
        this.router.paramMap.subscribe(params => {
            const id = parseInt(params.get('productId'));
            this.product = listproducts.filter(product => {
                return product.productId === id;
            })[0];
        });
    }
    onclick() {
        window.history.back();
    }
};
DetailproductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detailproduct',
        templateUrl: './detailproduct.component.html',
        styleUrls: ['./detailproduct.component.css']
    })
], DetailproductComponent);
export { DetailproductComponent };
//# sourceMappingURL=detailproduct.component.js.map