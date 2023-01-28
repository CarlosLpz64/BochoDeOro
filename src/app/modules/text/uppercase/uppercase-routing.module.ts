import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UppercaseComponent } from './uppercase/uppercase.component';

const routes: Routes = [
  { path: '', component: UppercaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UppercaseRoutingModule { }
