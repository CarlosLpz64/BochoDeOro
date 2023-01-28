import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderZyxComponent } from './order-zyx/order-zyx.component';

const routes: Routes = [
  { path: '', component: OrderZyxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderZyxRoutingModule { }
