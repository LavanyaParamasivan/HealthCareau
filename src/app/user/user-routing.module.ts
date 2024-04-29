import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { RegisterComponent } from './register/register.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes=[
    {path:'sign-in', component: SignInComponent },
     {path:'sign-in/register', component: RegisterComponent },
     {path:'profile', component: ProfileComponent },

];
@NgModule({
    declarations: [],
    imports: [
  
      RouterModule.forChild(routes)
    ],
    exports:[
      RouterModule
    ]
  })
  export class UserRoutingModule { }