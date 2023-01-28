import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathHubComponent } from './math-hub/math-hub.component';

const routes: Routes = [
  { path: '', component: MathHubComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathHubRoutingModule { }
