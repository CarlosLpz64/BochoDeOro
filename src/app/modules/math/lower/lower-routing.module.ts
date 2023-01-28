import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LowerComponent } from './lower/lower.component';

const routes: Routes = [
  { path: '', component: LowerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LowerRoutingModule { }
