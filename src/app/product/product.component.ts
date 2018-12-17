import { Component, OnInit } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string = '';
  quantity: number;
  price: number;
  htmlString: string = '';
  constructor() { }

  ngOnInit() {
  }

  addProduct(){
    this.htmlString = `<tr><td>${this.name}</td><td>${this.quantity}</td><td>${this.price}</td></tr>` + this.htmlString;
    //document.getElementById('productTableBody').prepend(`<tr><td>${this.name}</td><td>${this.quantity}</td><td>${this.price}</td></tr>`);
  }

}
