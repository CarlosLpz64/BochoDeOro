import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvertComponent } from './invert/invert.component';

const routes: Routes = [
  { path: '', component: InvertComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvertRoutingModule { }
