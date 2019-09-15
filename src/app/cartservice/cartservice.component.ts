import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service'
import { listproducts } from '../product'
@Component({
  selector: 'app-cartservice',
  templateUrl: './cartservice.component.html',
  styleUrls: ['./cartservice.component.css']
})
export class CartserviceComponent implements OnInit {
  product: any;
  constructor(private cart: CartServiceService) { }

  ngOnInit() {
    this.product = this.cart.getItems();
  }

}
