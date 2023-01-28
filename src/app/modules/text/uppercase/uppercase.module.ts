import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UppercaseRoutingModule } from './uppercase-routing.module';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToUpperPipe } from './to-upper.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UppercaseComponent,
    ToUpperPipe
  ],
  imports: [
    CommonModule,
    UppercaseRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class UppercaseModule { }
