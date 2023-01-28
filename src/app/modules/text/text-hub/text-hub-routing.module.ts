import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextHubComponent } from './text-hub/text-hub.component';

const routes: Routes = [
  { path: '', component: TextHubComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextHubRoutingModule { }
