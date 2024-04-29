import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HealthyLivingComponent } from './healthy-living/healthy-living.component';
import { CartComponent } from '../app/cart/cart.component';

import {FullcheckupComponent} from './fullcheckup/fullcheckup.component';
import {CancerscreeningComponent} from './cancerscreening/cancerscreening.component';
import {EyetestComponent} from './eyetest/eyetest.component';
import {ECGComponent} from './ecg/ecg.component';
import {PaymentComponent} from './payment/payment.component';
import {SuccessComponent} from './success/success.component';

const routes: Routes=[
  {
  path:'home', component: HomeComponent , title: 'Home',
  data: { breadcrumb: 'Home' },
},
{path:'catalog/:filter', component: HealthyLivingComponent , title: 'Catalog',    },
{path:'cart', component: CartComponent , title: 'cart'},
{path:'users', loadChildren: ()=> import ('../app/user/user.module').then(m=>m.UserModule)},
// {path:'register', component: TemplateFormControlsComponent , title: 'register'},

{ path:'fullcheckup', component:FullcheckupComponent, title:'fullcheckup'},
{ path:'cancerscreening', component:CancerscreeningComponent, title:'cancerscreening'},
{ path:'eyehealth', component:EyetestComponent, title:'eyehealth'},
{ path:'payment', component:PaymentComponent, title:'payment'},
{ path:'success', component:SuccessComponent, title:'sucess'},
{ path:'ecg', component:ECGComponent, title:'ecg'},
{path:'', redirectTo:'/home', pathMatch:'full'},

];

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
