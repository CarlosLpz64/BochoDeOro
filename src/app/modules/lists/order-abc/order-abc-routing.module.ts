import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderAbcComponent } from './order-abc/order-abc.component';

const routes: Routes = [
  { path: '', component: OrderAbcComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderAbcRoutingModule { }
