import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberToWordsComponent } from './number-to-words/number-to-words.component';

const routes: Routes = [
  { path: '', component: NumberToWordsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberToWordsRoutingModule { }
