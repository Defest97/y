import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  products = [
    { name: 'вфів', price: 100 },
    { name: 'Товар 2', price: 200 },
    { name: 'Товар 3', price: 300 },
    { name: 'Товар 4', price: 400 },
  ];
  filterProducts = this.products;
  minPrice:any;
  maxPrice:any;

  onClick() {
    console.log(this.minPrice);
    if (this.minPrice != null) {
      this.filterProducts = this.products.filter(product => product.price > this.minPrice&&product.price<this.maxPrice)
    }

  }
}
