import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeJsonComponent } from './make-json/make-json.component';

const routes: Routes = [
  { path: '', component: MakeJsonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeJsonRoutingModule { }
