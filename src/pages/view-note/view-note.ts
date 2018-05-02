import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';

//import provider & interface

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {

  note: Note;

  //pass provider to function get note params from nav ctrl to view note
  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteServiceProvider) {
    this.note = this.navParams.get('note');
  }

  //call provider delete function pop page once done to go back
  deleteNote(createDate: number)
  {
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }

}
