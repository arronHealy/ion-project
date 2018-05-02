import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';
import { MapPage } from '../map/map';
//needed imports

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //generic promise type of notes array
  private notes: Promise<Note[]>;
  private note: Note;


  //pass provider to constructor
  constructor(public navCtrl: NavController, private noteService: NoteServiceProvider) {

  }

  //populate array with providers function call
  ionViewWillEnter()
  {
    this.notes = this.getAllNotes();
  }

  //go to add note page
  addNote()
  {
    this.navCtrl.push(AddNotePage);
  }

  //call provider getNote function if received push to view page
  getNote(createDate: number)
  {
    this.noteService.getNote(createDate).then((n) => {
      this.note = n;
      this.navCtrl.push(ViewNotePage, { note: this.note });
    });
  }

  //get all notes method from provider
  getAllNotes()
  {
    return this.noteService.getAllNotes();
  }

  //push map page on stack
  goToMap()
  {
    this.navCtrl.push(MapPage);
  }

}
