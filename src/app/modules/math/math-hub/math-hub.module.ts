import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathHubRoutingModule } from './math-hub-routing.module';
import { MathHubComponent } from './math-hub/math-hub.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MathHubComponent
  ],
  imports: [
    CommonModule,
    MathHubRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class MathHubModule { }
