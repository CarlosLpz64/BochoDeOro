import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HigherRoutingModule } from './higher-routing.module';
import { HigherComponent } from './higher/higher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HigherComponent
  ],
  imports: [
    CommonModule,
    HigherRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HigherModule { }
