import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
    
  }

  getData(){
    return this.storage.get('todos');
  }

  save(data){
    let newData = JSON.stringify(DataProvider);
    this.storage.set('todos', newData);
  }

}
