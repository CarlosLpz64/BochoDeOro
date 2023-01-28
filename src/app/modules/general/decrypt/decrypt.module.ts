import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecryptRoutingModule } from './decrypt-routing.module';
import { DecryptComponent } from './decrypt/decrypt.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DecryptComponent
  ],
  imports: [
    CommonModule,
    DecryptRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class DecryptModule { }
