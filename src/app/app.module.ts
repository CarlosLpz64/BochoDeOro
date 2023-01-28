import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared/modules/materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    SharedModule,
  ],
  //   providers: [Meta, Title, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [Meta, Title],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
