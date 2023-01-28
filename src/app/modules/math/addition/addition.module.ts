import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionRoutingModule } from './addition-routing.module';
import { AdditionComponent } from './addition/addition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdditionComponent
  ],
  imports: [
    CommonModule,
    AdditionRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdditionModule { }
