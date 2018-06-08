import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { StockSelectorComponent } from '../stock-selector/stock-selector.component';
import { Product } from '../../_shared/models/product.interface';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() removed = new EventEmitter<any>();
  @Input() map: Map<number, Product>;

  constructor() { }

  ngOnInit() {
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  onRemove(group: FormGroup, index: number): void {
    this.removed.emit({ group, index });
  }

  getProduct(id): Product {
    return this.map.get(id);
  }
}
