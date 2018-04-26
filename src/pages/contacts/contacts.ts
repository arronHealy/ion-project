import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactProvider } from '../../providers/contact/contact';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage implements OnInit {

  users: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactProvider: ContactProvider) {
  }

  ngOnInit()
  {
    this.contactProvider.getUsers()
    .subscribe(data => this.users = data.results);
  }


}
