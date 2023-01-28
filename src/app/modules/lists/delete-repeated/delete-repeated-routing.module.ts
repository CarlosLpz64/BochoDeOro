import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteRepeatedComponent } from './delete-repeated/delete-repeated.component';

const routes: Routes = [
  { path: '', component: DeleteRepeatedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteRepeatedRoutingModule { }
