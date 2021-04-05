import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ClientModel } from './../../models/client.model';

import { ClientService } from './../../services/client/client.service';
import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  clients: Observable<any[]>;

  constructor(
    private serviceClient: ClientService,
    private serviceData: DataService
  ) {
    this.clients = this.serviceClient.getAll();
  }

  ngOnInit(): void {
    this.serviceClient.getAll();
  }

  delete(key: string): void {
    this.serviceClient.delete(key);
  }

  edit(client: ClientModel, key: string): void {
    this.serviceData.changeDataClient(client, key);
  }

}
