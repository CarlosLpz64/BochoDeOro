import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FemaleRoutingModule } from './female-routing.module';
import { FemaleComponent } from './female/female.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FemaleComponent
  ],
  imports: [
    CommonModule,
    FemaleRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class FemaleModule { }
