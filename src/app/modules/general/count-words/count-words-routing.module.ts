import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountWordsComponent } from './count-words/count-words.component';

const routes: Routes = [
  { path: '', component: CountWordsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountWordsRoutingModule { }
