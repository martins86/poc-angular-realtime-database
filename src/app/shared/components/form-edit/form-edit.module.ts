import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormEditComponent } from './form-edit.component';


@NgModule({
  declarations: [
    FormEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormEditComponent
  ]
})
export class FormEditModule { }
