import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsHubComponent } from './lists-hub/lists-hub.component';

const routes: Routes = [
  { path: '', component: ListsHubComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsHubRoutingModule { }
