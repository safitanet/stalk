import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IFriendsProvider } from '../../providers/i-friends/i-friends'
import { Friend } from '../../app/interface';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

  friends: Friend[] = [];
  constructor(public navCtrl: NavController, public friendsServ: IFriendsProvider) {
    
  }

  ngOnInit(){
    this.friendsServ.getData().subscribe( (friends) => { 
        this.friends = friends;
      }, (error) => {
        console.log( error );
      });
  }

}
