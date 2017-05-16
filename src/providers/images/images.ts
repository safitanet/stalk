import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the ImagesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ImagesProvider {

  tasks:any[];

  constructor(public storage: Storage) {
    this.storage.get("tasks").then((result)=>{
      if (result) { 
        this.tasks = JSON.parse(result);
      }
    });
  }

  getData():Promise<string> {
    return this.storage.get('tasks');
  }

  saveData(data:any) {
    this.tasks.push(data);
    let newData = JSON.stringify(this.tasks);
    return this.storage.set("tasks", newData).then((result)=>{
      console.log('Guardado de tareas OK');
      return JSON.parse(result);
    }).catch((error)=>{
      console.log('Ha habido un error en el guardado de tasks');
    });
  }

}
