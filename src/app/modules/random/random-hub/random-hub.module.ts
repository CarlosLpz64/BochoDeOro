import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomHubRoutingModule } from './random-hub-routing.module';
import { RandomHubComponent } from './random-hub/random-hub.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RandomHubComponent
  ],
  imports: [
    CommonModule,
    RandomHubRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class RandomHubModule { }
