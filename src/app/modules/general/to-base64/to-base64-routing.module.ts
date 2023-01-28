import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToBase64Component } from './to-base64/to-base64.component';

const routes: Routes = [
  { path: '', component: ToBase64Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToBase64RoutingModule { }
