import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LowercaseComponent } from './lowercase/lowercase.component';

const routes: Routes = [
  { path: '', component: LowercaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LowercaseRoutingModule { }
