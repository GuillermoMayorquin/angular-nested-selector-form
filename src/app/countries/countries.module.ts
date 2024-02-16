import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import {CountriesRoutingModule} from './countries-routing.module'


@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  exports:[
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule {}
