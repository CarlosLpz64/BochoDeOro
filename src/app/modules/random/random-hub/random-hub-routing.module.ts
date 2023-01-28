import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomHubComponent } from './random-hub/random-hub.component';

const routes: Routes = [
  { path: '', component: RandomHubComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomHubRoutingModule { }
