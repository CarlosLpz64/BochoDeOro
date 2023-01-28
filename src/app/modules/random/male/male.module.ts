import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaleRoutingModule } from './male-routing.module';
import { MaleComponent } from './male/male.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MaleComponent
  ],
  imports: [
    CommonModule,
    MaleRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class MaleModule { }
