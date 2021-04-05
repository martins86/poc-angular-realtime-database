import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ClientModel } from './../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private clientSource = new BehaviorSubject({ client: null, key: ''});
  clientCurrent = this.clientSource.asObservable();

  constructor() { }

  changeDataClient(upClient: ClientModel, upKey: string): void {
    this.clientSource.next({ client: upClient, key: upKey});
  }
}
