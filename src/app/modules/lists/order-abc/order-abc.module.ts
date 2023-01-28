import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderAbcRoutingModule } from './order-abc-routing.module';
import { OrderAbcComponent } from './order-abc/order-abc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OrderAbcComponent
  ],
  imports: [
    CommonModule,
    OrderAbcRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderAbcModule { }
