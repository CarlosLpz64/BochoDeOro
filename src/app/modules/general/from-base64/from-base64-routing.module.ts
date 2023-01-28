import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromBase64Component } from './from-base64/from-base64.component';

const routes: Routes = [
  { path: '', component: FromBase64Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FromBase64RoutingModule { }
