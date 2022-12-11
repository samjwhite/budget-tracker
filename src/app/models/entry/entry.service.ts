import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root'
})

export class EntryService {

  private entriesUrl = 'api/entries';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.entriesUrl)
    .pipe(
      map(entries => entries.map( entry => {
        entry.dateCreated = new Date(entry.dateCreated);
        return entry;
      })),
      tap(_ => console.log('fetched enries')),
      catchError(this.handleError<Entry[]>('getEntries', []))
    );
  }

    //////// Save methods //////////

  /** POST: add a new entry to the server */
  addEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.entriesUrl, entry, this.httpOptions).pipe(
      catchError(this.handleError<Entry>('addEntry'))
    );
  }

  /** DELETE: delete the entry from the server */
  deleteEntry(id: number): Observable<Entry> {
    const url = `${this.entriesUrl}/${id}`;

    return this.http.delete<Entry>(url, this.httpOptions).pipe(
      catchError(this.handleError<Entry>('deleteEntry'))
    );
  }

  /** PUT: update the entry on the server */
  updateEntry(entry: Entry): Observable<any> {
    return this.http.put(this.entriesUrl, entry, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateEntry'))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
