import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockinventoryComponent } from '../components/stockinventory/stockinventory.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StockBranchComponent } from '../components/stock-branch/stock-branch.component';
import { StockProductsComponent } from '../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../components/stock-selector/stock-selector.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path:'',
      pathMatch: 'full',
      component: StockinventoryComponent
    }]),
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [StockinventoryComponent, StockBranchComponent, StockProductsComponent, StockSelectorComponent]
})
export class StockinventoryModule { }
