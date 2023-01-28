import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { CookieAdviceComponent } from './components/cookie-advice/cookie-advice.component';
import { ExampleCodeComponent } from './components/example-code/example-code.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShellLayoutComponent } from './components/shell-layout/shell-layout.component';
import { MaterialsModule } from './modules/materials/materials.module';

const components = [
  SidebarComponent,
  ToolbarComponent,
  ShellLayoutComponent,
  FooterComponent,
  ExampleCodeComponent,
  CookieAdviceComponent
]

@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialsModule, RouterModule],
  exports: components
})
export class SharedModule { }
