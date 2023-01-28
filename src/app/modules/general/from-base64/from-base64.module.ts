import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FromBase64RoutingModule } from './from-base64-routing.module';
import { FromBase64Component } from './from-base64/from-base64.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FromBase64Component
  ],
  imports: [
    CommonModule,
    FromBase64RoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class FromBase64Module { }
