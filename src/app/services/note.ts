import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  constructor() { }
  noteslist=signal<INoteInterface[]>([]);
  getNotes() {
    return this.noteslist;
  }
  addNote(note: INoteInterface) {
    this.noteslist.update(notes => [...notes, note]);
    debugger
  }
  removeNote(id: number) {
    this.noteslist.update(notes => notes.filter(n => n.id !== id));
  }
}
interface INoteInterface {
  noteText: string;
  priority: string;
id:number;
}
