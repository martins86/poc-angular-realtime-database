import { Component, OnInit } from '@angular/core';

import { ClientModel } from './../../models/client.model';

import { ClientService } from './../../services/client/client.service';
import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss'],
})
export class FormEditComponent implements OnInit {
  client: ClientModel;
  key = '';

  constructor(
    private serviceClient: ClientService,
    private serviceData: DataService
  ) {}

  ngOnInit(): void {
    this.resetClient();
    this.currentClient();
  }

  onSubmit(): void {
    if (this.key) {
      this.updateClient();
    } else {
      this.insertClient();
    }
    this.resetClient();
  }

  private insertClient(): void {
    this.serviceClient
      .insert(this.client)
      .catch((error) => {
        console.error(error);
      });
  }

  private updateClient(): any {
    this.serviceClient
      .update(this.client, this.key)
      .catch((error) => {
        console.error(error);
      });
  }

  private resetClient(): void {
    this.client = new ClientModel('', null);
    this.key = '';
  }

  private currentClient(): void {
    this.serviceData.clientCurrent.subscribe((data) => {
      if (data.client && data.key) {
        this.client = new ClientModel(data.client.name, data.client.phone);
        this.key = data.key;
      }
    });
  }
}
