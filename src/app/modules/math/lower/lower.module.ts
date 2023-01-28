import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LowerRoutingModule } from './lower-routing.module';
import { LowerComponent } from './lower/lower.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LowerComponent
  ],
  imports: [
    CommonModule,
    LowerRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LowerModule { }
