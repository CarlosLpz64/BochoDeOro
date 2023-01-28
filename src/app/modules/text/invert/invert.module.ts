import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvertRoutingModule } from './invert-routing.module';
import { InvertComponent } from './invert/invert.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { InvertPipe } from './invert.pipe';


@NgModule({
  declarations: [
    InvertComponent,
    InvertPipe
  ],
  imports: [
    CommonModule,
    InvertRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class InvertModule { }
