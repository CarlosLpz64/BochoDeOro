import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteRepeatedRoutingModule } from './delete-repeated-routing.module';
import { DeleteRepeatedComponent } from './delete-repeated/delete-repeated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DeleteRepeatedComponent
  ],
  imports: [
    CommonModule,
    DeleteRepeatedRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeleteRepeatedModule { }
