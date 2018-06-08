import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent implements OnInit {
  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(): void {
    if (this.value < this.max) {
      this.value = this.value + this.step;
    }
  }

  decrement(): void {
    if (this.value > this.min) {
      this.value = this.value - this.step;
    }
  }

}
