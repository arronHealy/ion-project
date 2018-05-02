import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { FormGroup, FormControl } from '@angular/forms';

//imports from interface note & notes provider folders
//import forms from angular forms


@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  //vars for note building 
  //form group import
  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  //pass notes privder to constructor
  constructor(public navCtrl: NavController, private noteService: NoteServiceProvider) {

    //build form with local vars
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),

    });
  }

  saveNote(value: Note)
  {
    //pass note value to providers saveNote function
    this.noteService.saveNote(value);

    //pop page off stack once done
    this.navCtrl.pop();
  }

}