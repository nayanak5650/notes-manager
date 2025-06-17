import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'https://localhost:7025/api/Note';
  private notesRefresh: Subject<boolean> = new Subject<boolean>();
  public notesRefresh$ = this.notesRefresh.asObservable();
  constructor(private http: HttpClient) { }

  getNotes(): Observable<INoteInterface[]> {
    return this.http.get<INoteInterface[]>(this.apiUrl);
  }
  addNote(note: INoteInterface): Observable<INoteInterface> {
    return this.http.post<INoteInterface>(this.apiUrl, note);
  }
  removeNote(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  refreshNotes(){
    console.log('Refreshing notes');
    this.notesRefresh.next(true);
  }
}

export interface INoteInterface {
  noteText: string;
  priority: string;
  id: string | undefined;
}
