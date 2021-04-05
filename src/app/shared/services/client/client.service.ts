import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { ClientModel } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private fireDb: AngularFireDatabase
  ) { }

  getAll(): any {
    return this.fireDb.list('client')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(
            client => (
              {
                key: client.payload.key,
                ...client.payload.val() as {}
              }
          ));
        })
      );
  }

  insert(client: ClientModel): any {
    return this.fireDb.list('client').push(client);
  }

  update(client: ClientModel, key: string): any {
    return this.fireDb.list('client').update(key, client);
  }

  delete(key: string): any {
    return this.fireDb.object(`client/${key}`).remove();
  }
}
