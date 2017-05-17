import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Friend } from "../../app/interface";

@Injectable()
export class IFriendsProvider {

  friendUrl = '../../api/friends.json';

  constructor(public http: Http, public response: Response) {

  }

  getData():Observable<Friend[]>{
    return this.http.get( this.friendUrl ).map((response:Response) => {
            console.log( response );
            return <Friend[]>response.json();
        }).catch(this.handleError);
  }

  saveData(){

  }

  private handleError( error:Response ){
      return Observable.throw( error.json().error || 'Server error' );
  }
}