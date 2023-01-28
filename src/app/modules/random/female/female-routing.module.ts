import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FemaleComponent } from './female/female.component';

const routes: Routes = [
  { path: '', component: FemaleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FemaleRoutingModule { }
