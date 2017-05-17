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

  images:any[] = [];
  
  constructor(public storage:Storage) {
    console.log('Hello ImagesProvider Provider');
  }

  getData(){
    return this.storage.get("images").then((results) => {
      this.images = results ? JSON.parse(results):[];
      
      return this.images;
  });
  };
  
  saveData(data:any){
    return this.storage.get("images").then((results) => {
      this.images = results ? JSON.parse(results):[];
      this.images.push(data);
      return this.storage.set("images", JSON.stringify(this.images));
  });
    
  }
}
