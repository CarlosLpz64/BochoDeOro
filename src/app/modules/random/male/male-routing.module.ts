import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaleComponent } from './male/male.component';

const routes: Routes = [
  { path: '', component: MaleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaleRoutingModule { }
