import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HigherComponent } from './higher/higher.component';

const routes: Routes = [
  { path: '', component: HigherComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HigherRoutingModule { }
