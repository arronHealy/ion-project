import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../../models/note.model';
//imports storage and note interface


@Injectable()
export class NoteServiceProvider {

  //notes vars
  private notes: Note[] = [];
  private note: Note;

  //pass storage to constructor
  constructor(public storage: Storage) {
    
  }//constructor

  //save note function sets date for note
  //pushes this note to array of notes
  //save this note to storage
  saveNote(note: Note)
  {

    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes', this.notes);

  }//saveNote

  //return notes from storage promise to check notes not null
  getAllNotes()
  {
    return this.storage.get('notes').then((notes) => 
    {
        if(notes == null)
        {
          this.notes = [];
        }
        else
        {
          this.notes = notes;
        }//if

        return this.notes.slice();
      }
    );
  }//getAllNotes

  //pass date to find and return based on that date
  getNote(createDate: number)
  {
    return this.storage.get('notes').then((notes) => 
    {
      this.note = this.notes.slice().find(r => r.createDate === createDate);
      return this.note;
    });
  }//getNote

  //delete notes based on filter function return note not equal to date
  //set storage after deletion
  deleteNote(createDate: number)
  {
    this.notes = this.notes.filter((note) => {
      return note.createDate !== createDate;
    });
    this.storage.set('notes', this.notes);
  }//deleteNote

}//class
