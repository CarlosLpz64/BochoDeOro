import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderZyxRoutingModule } from './order-zyx-routing.module';
import { OrderZyxComponent } from './order-zyx/order-zyx.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OrderZyxComponent
  ],
  imports: [
    CommonModule,
    OrderZyxRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderZyxModule { }
