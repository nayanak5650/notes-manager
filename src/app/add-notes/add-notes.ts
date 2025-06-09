import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../services/note';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.html',
  styleUrls: ['./add-notes.scss'],
  imports: [ReactiveFormsModule,CommonModule],
})
export class AddNotes {
  constructor(private noteService:NoteService) {}
   noteForm = new FormGroup({
    noteText: new FormControl('',Validators.required),
    priority: new FormControl('',Validators.required),

  });
  priorities= [
    { value: 'critical', label: 'critical' },
    { value: 'high', label: 'high' },
    { value: 'low', label: 'low' }
  ];
  saveNote() {
    console.log('Note:', this.noteForm.value.noteText);
    console.log('Priority:', this.noteForm.value.priority);
    this.noteService.addNote({
      noteText: this.noteForm.value.noteText ?? '',
      priority: this.noteForm.value.priority ?? '',
      id: Date.now() // Using timestamp as a unique ID
    });
    this.noteForm.reset();
  }

  cancel() {
    this.noteForm.reset();
    console.log('Note creation cancelled');
  }
}
