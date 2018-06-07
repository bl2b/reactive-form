import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stockinventory',
  templateUrl: './stockinventory.component.html',
  styleUrls: ['./stockinventory.component.scss']
})
export class StockinventoryComponent implements OnInit {
  form : FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      store: this._fb.group({
        branch: 'tes',
        code: '123'
      }),
      selector: this._fb.group({
        product_id: '',
        quantity: 10
      }),
      stock: this._fb.array([])
    });
  }

  onSubmit(): void {
  }

}
