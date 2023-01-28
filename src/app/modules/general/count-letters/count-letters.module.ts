import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountLettersRoutingModule } from './count-letters-routing.module';
import { CountLettersComponent } from './count-letters/count-letters.component';
import { CountLettersPipe } from './count-letters.pipe';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CountLettersComponent,
    CountLettersPipe
  ],
  imports: [
    CommonModule,
    CountLettersRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class CountLettersModule { }
