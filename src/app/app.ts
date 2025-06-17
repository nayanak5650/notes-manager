import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AddNotes } from './add-notes/add-notes';
import { Note } from './note/note';
import { NoteService } from './services/note';
import { CommonModule } from '@angular/common';
import { INoteInterface } from './services/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports:[AddNotes,Note,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected firstName = 'nayana';
  notelist = signal<INoteInterface[]>([]);
  constructor(private noteService: NoteService) {

    this.noteService.getNotes().subscribe((notes) => {
      this.notelist.set(notes);
    });

    this.noteService.notesRefresh$.subscribe((refresh) => {
      if (refresh) {
        this.noteService.getNotes().subscribe((notes) => {
          this.notelist.set(notes);
        });
      }
    });
  }
}
