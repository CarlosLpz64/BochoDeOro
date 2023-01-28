import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomNumberRoutingModule } from './random-number-routing.module';
import { RandomNumberComponent } from './random-number/random-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RandomNumberComponent
  ],
  imports: [
    CommonModule,
    RandomNumberRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RandomNumberModule { }
