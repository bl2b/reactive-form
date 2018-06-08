import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Product } from '../../_shared/models/product.interface';
import { StockinventoryService } from '../../services/stockinventory.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { Item } from '../../_shared/models/item.interface';

@Component({
  selector: 'app-stockinventory',
  templateUrl: './stockinventory.component.html',
  styleUrls: ['./stockinventory.component.scss']
})
export class StockinventoryComponent implements OnInit {
  form: FormGroup;
  constructor(private _fb: FormBuilder, private _svc: StockinventoryService) { }

  products: Product[];
  productMap: Map<number, Product>;
  total: number;


  ngOnInit() {
    this.form = this._fb.group({
      store: this._fb.group({
        branch: '',
        code: ''
      }),
      selector: this.createStock({}),
      stock: this._fb.array([])
    });

    const cart = this._svc.getCartItems();
    const products = this._svc.getProducts();

    Observable
      .forkJoin(cart, products)
      .subscribe(([cart, products]) => {
        const myMap = products.map<[number, Product]>(product => [product.id, product])
        this.productMap = new Map<number, Product>(myMap);
        //{ 1, {}}
        this.products = products;
        cart.forEach(item => this.addStock(item));

        this.calculateTotal(this.form.get('stock').value);
        this.form.get('stock').valueChanges.subscribe((val) => {
          this.calculateTotal(val);
        });
      });
  }

  calculateTotal(value: Item[]) {
    const total = value.reduce((prev, next) => {
      return prev + (next.quantity * this.productMap.get(next.product_id).price);
    }, 0)

    this.total = total;
  }

  onSubmit(): void {
  }

  createStock(stock) {
    return this._fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  addStock(stock): void {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock(group: FormGroup, index: number): void {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }
  
}
