import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LowercaseRoutingModule } from './lowercase-routing.module';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ToLowerPipe } from './to-lower.pipe';


@NgModule({
  declarations: [
    LowercaseComponent,
    ToLowerPipe
  ],
  imports: [
    CommonModule,
    LowercaseRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class LowercaseModule { }
