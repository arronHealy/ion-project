import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactProvider } from '../../providers/contact/contact';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
//imports 

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage implements OnInit {

  //declare array for users
  users: any[] = [];

  //pass provider to constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, private contactProvider: ContactProvider) {
  }

  //on init method to load users once page loaded
  ngOnInit()
  {
    this.contactProvider.getUsers()
    .subscribe(data => this.users = data.results);
  }


}
