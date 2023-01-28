import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToBase64RoutingModule } from './to-base64-routing.module';
import { ToBase64Component } from './to-base64/to-base64.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ToBase64Component
  ],
  imports: [
    CommonModule,
    ToBase64RoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ToBase64Module { }
