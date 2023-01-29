import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { MaterialsModule } from './modules/materials/materials.module';

const components = [
  SidebarComponent,
  ToolbarComponent,
]

@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialsModule, RouterModule],
  exports: components
})
export class SharedModule { }
