import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts/contacts.service';
import { Contact } from '../contacts/contact.model';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  //   this.contactsService.getAllContacts().subscribe(contacts => this.contacts = contacts);
   }

  get favoriteContacts(): Contact[] {
    return this.contacts
      .filter(c => c.favoritesRanking && c.favoritesRanking > 0)
      .sort(this.sortByFavoriteRanking);
  }

  sortByFavoriteRanking(a: Contact, b: Contact): number {
    if (!a.favoritesRanking)
      return -1;
    if (!b.favoritesRanking)
      return 1;
    if (a.favoritesRanking < b.favoritesRanking)
      return -1;
    else if (a.favoritesRanking > b.favoritesRanking)
      return 1;

    return 0;
  }
}
