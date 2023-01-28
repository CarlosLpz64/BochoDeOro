import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextHubRoutingModule } from './text-hub-routing.module';
import { TextHubComponent } from './text-hub/text-hub.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TextHubComponent
  ],
  imports: [
    CommonModule,
    TextHubRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class TextHubModule { }
