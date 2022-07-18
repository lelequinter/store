import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // Recibiendo los datos del comp Padre
  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
