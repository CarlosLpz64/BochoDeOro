import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountWordsRoutingModule } from './count-words-routing.module';
import { CountWordsComponent } from './count-words/count-words.component';
import { FormsModule } from '@angular/forms';
import { MaterialsModule } from 'src/app/shared/modules/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountWordsPipe } from './count-words.pipe';


@NgModule({
  declarations: [
    CountWordsComponent,
    CountWordsPipe
  ],
  imports: [
    CommonModule,
    CountWordsRoutingModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ]
})
export class CountWordsModule { }
