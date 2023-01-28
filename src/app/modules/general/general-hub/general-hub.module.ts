import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralHubRoutingModule } from './general-hub-routing.module';
import { GeneralHubComponent } from './general-hub/general-hub.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SucursalModalComponent } from './general-hub/sucursal-modal/sucursal-modal.component';


@NgModule({
  declarations: [
    
  
    GeneralHubComponent,
              SucursalModalComponent
  ],
  imports: [
    CommonModule,
    GeneralHubRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class GeneralHubModule { }
