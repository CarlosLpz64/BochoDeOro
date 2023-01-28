import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotteryComponent } from './lottery/lottery.component';

const routes: Routes = [
  { path: '', component: LotteryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryRoutingModule { }
