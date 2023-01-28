import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsHubRoutingModule } from './lists-hub-routing.module';
import { ListsHubComponent } from './lists-hub/lists-hub.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListsHubComponent
  ],
  imports: [
    CommonModule,
    ListsHubRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class ListsHubModule { }
