import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listproducts } from '../product'


@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})


export class DetailproductComponent implements OnInit {
  product;
  pageTitle = '';


  constructor(private router: ActivatedRoute) { }
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      const id = parseInt(params.get('productId'))
      this.product = listproducts.filter(product => {
        return product.productId === id
      })[0];
    });
  }

  onclick() {
    window.history.back();
  }
}
