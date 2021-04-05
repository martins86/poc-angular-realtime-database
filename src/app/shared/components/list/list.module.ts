import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncateStringPipe } from './../../pipes/truncate-string/truncate-string.pipe';

import { ListComponent } from './list.component';


@NgModule({
  declarations: [
    ListComponent,
    TruncateStringPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
