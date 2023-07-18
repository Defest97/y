import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  products = [
    { name: 'вфів', price: 100 },
    { name: 'Товар 2', price: 200 },
    { name: 'Товар 3', price: 300 },
    { name: 'Товар 4', price: 400 },
  ];
  filterProducts=this.products;
  filterText = '';
  onInput() {
    this.filterProducts= this.products.filter(product => product.name.toLowerCase().includes(this.filterText.toLowerCase()));
  }
}
