import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products = [];
  title = 'Products-Table';

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts() {
    return [
      { id: 1, title: 'Screw Driver', price: 400, stock: 11 },
      { id: 2, title: 'Nut Volt', price: 200, stock: 5 },
      { id: 3, title: 'Resistor', price: 78, stock: 45 },
      { id: 4, title: 'Tractor', price: 20000, stock: 1 },
      { id: 5, title: 'Roller', price: 62, stock: 15 }
    ];
  }

  changeStock(event: any) {
    if (event !== null) {
      const product = this.products[event.id - 1];
      product.stock = product.stock + event.value;
      this.products[event.id - 1] = product;
      console.debug(this.products.filter(x => x.price === 400));
    }
  }
}
