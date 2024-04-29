import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import{UserRoutingModule} from '../user/user-routing.module';
import { RegisterComponent} from './register/register.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryContactsApi } from './contacts/in-memory-contacts.service';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsService } from './contacts/contacts.service';




@NgModule({
  declarations: [ SignInComponent,
    RegisterComponent,
    ProfileComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   HttpClientInMemoryWebApiModule.forFeature(InMemoryContactsApi, { delay: 200 })
  ],
  providers:[
    ContactsService,
  ]
})
export class UserModule { }
