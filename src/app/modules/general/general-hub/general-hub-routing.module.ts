import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralHubComponent } from './general-hub/general-hub.component';

const routes: Routes = [
  { path: '', component: GeneralHubComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralHubRoutingModule { }
