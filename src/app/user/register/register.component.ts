import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { PhoneTypeValue,AddressTypeValue} from '../contacts/contact.model'
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'bot-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  phoneTypes = PhoneTypeValue;
  addressTypes = AddressTypeValue;
  profileForm= this.fb.nonNullable.group({
    email :['', [Validators.required,Validators.minLength(3)]],
    name :'',
    password : '',
    phones: this.fb.array([this.createphoneGroup()]),
    address: this.fb.nonNullable.group({
      streetAddress: ['', Validators.required],
      city:['',Validators.required],
      state: ['',Validators.required],
      postalCode: ['',Validators.required],
      addressType:'',
    })
  });
  data:any;

  constructor(private route: ActivatedRoute, private contactservice: ContactsService, private router:Router, private fb :FormBuilder,private toastr: ToastrService) { }

  ngOnInit() {

    const contactId = this.route.snapshot.params['id'];
    if (!contactId) {
      this.subscribeToAddressChanges();
      return;
    }
   
this.contactservice.getContact(contactId).subscribe((contact=>{
  if(!contact) {

    return
  }
  // this.profileForm.setValue(contact);

}))
  
  }
  stringifyCompare(a:any,b:any){
return JSON.stringify(a) === JSON.stringify(b)
  }
  createphoneGroup(){
   const phoneGroup= this.fb.nonNullable.group({
      phoneNumber:'',
      phoneType:'',
      preferred:false,

    });
    phoneGroup.controls.preferred.valueChanges.pipe(distinctUntilChanged(this.stringifyCompare)).
    subscribe(value=>{
if(value)
phoneGroup.controls.phoneNumber.addValidators([Validators.required])
else
phoneGroup.controls.phoneNumber.removeValidators([Validators.required])
phoneGroup.controls.phoneNumber.updateValueAndValidity();
    });
    return phoneGroup
  }
subscribeToAddressChanges(){
  console.log('hi')
  const addressGroup = this.profileForm.controls.address;
  addressGroup.valueChanges.pipe(distinctUntilChanged(this.stringifyCompare)).subscribe( ()=>{
 for( const controlName in addressGroup.controls ){
 addressGroup.get(controlName)?.removeValidators([Validators.required]);
 addressGroup.get(controlName)?.updateValueAndValidity();
 }
  });
  addressGroup.valueChanges.pipe(distinctUntilChanged(this.stringifyCompare)).subscribe( ()=>{
    for( const controlName in addressGroup.controls ){
    addressGroup.get(controlName)?.addValidators([Validators.required]);
    addressGroup.get(controlName)?.updateValueAndValidity();
    }
     })
}
  addPhone(){
this.profileForm.controls.phones.controls.push(this.createphoneGroup());
  }

get firstName(){
  return this.profileForm.controls.email;
}

cancel(){
  this.router.navigate(['users/sign-in']);
}
saveContact() {
    this.data ={
    
  name: this.profileForm.controls.name.value,
  email: this.profileForm.controls.email.value,
  password: this.profileForm.controls.password.value,
}

this.toastr.success('Registered Successfully', 'Success');
this.contactservice.saveContact( this.data).subscribe({


next:()=>this.router.navigate(['users/sign-in'])

}

);

  }
}
