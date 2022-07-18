import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  // Recibiendo los datos del comp Padre
  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  // Metodo creado para cuando se haga click en el boton
  onClick(): void {
    // console.log('Click', this.product);
    this.addToCartClick.emit(this.product);
  }
}
