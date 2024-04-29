import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, retry, throwError } from 'rxjs';
import { Contact } from './contact.model';
import { nanoid } from 'nanoid'

@Injectable({
  providedIn: 'root',
})
export class ContactsService  {
  private user: BehaviorSubject<Contact[] | null>;
  public isUser = new BehaviorSubject<boolean>(false);

  cast = this.isUser.asObservable();
  constructor(private http: HttpClient) { 
    this.user = new BehaviorSubject<Contact[] | null>(null);
  }

  getContact(id: string): Observable<Contact | undefined> {
    return this.http.get<Contact>(`api/contacts/${id}`)
   
      //   return { ...c, dateOfBirth: dob }
      // .pipe(map(c => {
      //   const dob = c.dateOfBirth ? new Date(c.dateOfBirth) : null;
      //   return { ...c, dateOfBirth: dob }
      // }));
  }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`api/contacts/`);
  }
  getUser(): Observable<Contact[] | null> {
    return this.user;
  }

  saveContact(contact: Partial<Contact>): Observable<Contact> {
    const headers = { headers: { 'Content-Type': 'application/json' , responsetype: 'text'} };

    if (!contact.id || contact.id === '') {
      let newContact: Partial<Contact >= { ...contact, id: nanoid(5) };
      return this.http.post <Contact>('api/contacts/', newContact, headers).pipe(
        retry(2), catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        }));
      
   }
   else
      return this.http.put<Contact>('api/contacts/', contact, headers)
  }

 
}

