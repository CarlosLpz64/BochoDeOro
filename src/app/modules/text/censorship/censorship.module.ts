import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CensorshipRoutingModule } from './censorship-routing.module';
import { CensorshipComponent } from './censorship/censorship.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CensorshipComponent
  ],
  imports: [
    CommonModule,
    CensorshipRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class CensorshipModule { }
