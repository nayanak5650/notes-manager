import { Component, Input } from '@angular/core';
import { NoteService } from '../services/note';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrl: './note.scss'
})
export class Note {
  constructor(private noteService: NoteService) { }
  delete: any;
  @Input() noteContent: string = '';
  @Input() priority: string = '';
  @Input() id: string | undefined = "";

  deleteNote() {
    console.log('Delete note with ID:', this.id);
    this.noteService.removeNote(this.id ?? "")
      .subscribe((response) => {
        console.log('Note deleted successfully:', response);
        this.noteService.refreshNotes();
      });
  }


}
