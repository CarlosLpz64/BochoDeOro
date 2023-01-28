import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeJsonRoutingModule } from './make-json-routing.module';
import { MakeJsonComponent } from './make-json/make-json.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MakeJsonComponent
  ],
  imports: [
    CommonModule,
    MakeJsonRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MakeJsonModule { }
