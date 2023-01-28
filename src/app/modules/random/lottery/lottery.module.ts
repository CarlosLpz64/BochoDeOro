import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteryRoutingModule } from './lottery-routing.module';
import { LotteryComponent } from './lottery/lottery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LotteryComponent
  ],
  imports: [
    CommonModule,
    LotteryRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LotteryModule { }
