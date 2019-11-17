import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyElementsModule, LazyElementModuleOptions } from '@angular-extensions/elements';

import { AppComponent } from './app.component';

const options: LazyElementModuleOptions = {
  elementConfigs: [
    { tag: 'edo-button', url: 'https://kmanev073.github.io/EdoButton/dist/main-es2015.js' },
    { tag: 'edo-input', url: 'https://kmanev073.github.io/EdoInput/dist/main-es2015.js' }
  ]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LazyElementsModule.forFeature(options),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
