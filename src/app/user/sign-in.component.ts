import { Component, OnInit } from '@angular/core';
import { IUserCredentials } from './user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { ContactsService } from './contacts/contacts.service';
import { Contact } from './contacts/contact.model';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  contacts: Contact[] = [];
  credentials: IUserCredentials ={
    email:'',
    password:''
  }
  signInError :boolean= false

  constructor(private userservice:UserService, private router : Router, private contactservice:ContactsService,private toastr: ToastrService,public bookservice :BookService){
    
  }

  ngOnInit(): void {
    localStorage.setItem('key','false')
  }
//   Signin(){
// this.signInError=false;
//     this.userservice.signIn(this.credentials).subscribe({

//       next:()=> this.router.navigate(['/home']),
//       error:()=> this.signInError= true,
//     });
//   }
  Signin(){
    this.signInError=false;
    this.contactservice.getAllContacts().subscribe((contacts) =>{
    if(contacts){
      this.contacts = contacts;
      console.log(this.contacts)
      this.contacts.map((val)=>{
        
     
       if(val.email === this.credentials.email)
       {
        this.toastr.success('Signed-in Successfully', 'Success');
        this.signInError= false;
        this.contactservice.isUser.next(false);
        this.bookservice.userall =true;
        //  this.contactservice.userall=true;
        //  localStorage.setItem('key', 'true');
         localStorage.setItem('name',val.email);
        
          this.router.navigate(['/home']);
       }
       else{
         this.signInError= true;
         this.bookservice.userall =false;
        //  this.contactservice.userall=false;
        // this.dialog.open(MessageComponent,{ data: {
        //   message:  "Sign-in Unsuccessfull"
        //   }});
        this.contactservice.isUser.next(false)
      
        // localStorage.setItem('key', 'false');
       }
      });
    }}
  );


  }
}