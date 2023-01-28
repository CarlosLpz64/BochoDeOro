import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountLettersComponent } from './count-letters/count-letters.component';

const routes: Routes = [
  { path: '', component: CountLettersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountLettersRoutingModule { }
