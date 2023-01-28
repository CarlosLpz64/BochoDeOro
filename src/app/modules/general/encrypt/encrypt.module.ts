import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncryptRoutingModule } from './encrypt-routing.module';
import { EncryptComponent } from './encrypt/encrypt.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EncryptComponent
  ],
  imports: [
    CommonModule,
    EncryptRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class EncryptModule { }
