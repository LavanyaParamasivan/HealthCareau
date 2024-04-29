import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { ContactsService } from '../user/contacts/contacts.service';
import { Contact } from '../user/contacts/contact.model';
import { Router } from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.css']
})
export class SideHeaderComponent implements OnInit {
useralll:any=false; 
cart:any;
showsignout:boolean =false;
  name: any;
constructor(private userservice:UserService, private contactservice: ContactsService,private router: Router,public bookservice:BookService){
  
}
ngOnInit() {

  this.router.events.subscribe((val:any)=>{

if(val.url=== '/home' && localStorage.getItem('name')){

  this.name= localStorage.getItem('name');
 
 this.useralll= this.bookservice.userall;
}
if(val.url==='/payment' && localStorage.getItem('guest')){
  this.name= localStorage.getItem('guest');
  this.useralll= this.bookservice.userall;
}

 
  });

}

toggleSignOutMenu(){
  this.showsignout = !this.showsignout;
}

signout(){
  this.useralll=false;
  this.bookservice.userall=false;
  this.showsignout =false;
  
}
}
