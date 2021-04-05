import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';

import { FormEditModule } from './../../shared/components/form-edit/form-edit.module';

import { ClientComponent } from './client.component';
import { ListModule } from '../../shared/components/list/list.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormEditModule,
    ListModule
  ]
})
export class ClientModule { }
