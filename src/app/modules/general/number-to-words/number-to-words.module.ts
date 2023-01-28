import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberToWordsRoutingModule } from './number-to-words-routing.module';
import { NumberToWordsComponent } from './number-to-words/number-to-words.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    
  
    NumberToWordsComponent
  ],
  imports: [
    CommonModule,
    NumberToWordsRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NumberToWordsModule { }
