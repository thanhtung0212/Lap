import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CartServiceService = class CartServiceService {
    constructor() {
        this.items = [];
    }
    addToCart(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
};
CartServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CartServiceService);
export { CartServiceService };
//# sourceMappingURL=cart-service.service.js.map