import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HealthyLivingComponent } from './healthy-living/healthy-living.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { HealthylivingDetailsComponent } from './healthyliving-details/healthyliving-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryContactsApi } from '../app/user/contacts/in-memory-contacts.service';
import { AppRoutingModule } from './app-routing.module';
import { OrderByPipe } from './healthy-living/order-by.pipe';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullcheckupComponent } from './fullcheckup/fullcheckup.component';
import { CancerscreeningComponent } from './cancerscreening/cancerscreening.component';
import { EyetestComponent } from './eyetest/eyetest.component';
import { ECGComponent } from './ecg/ecg.component';
import { MessageComponent } from './message/message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { NgxPayPalModule } from 'ngx-paypal';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from './footer/footer.component';










 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HealthyLivingComponent,
    SideHeaderComponent,
    HealthylivingDetailsComponent,
    CartComponent,
    OrderByPipe,

    FullcheckupComponent,
    CancerscreeningComponent,
    EyetestComponent,
    ECGComponent,
    MessageComponent,
    PaymentComponent,
    SuccessComponent,
    FooterComponent,
  



   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserAnimationsModule, 
    NgxPayPalModule,
    MatIconModule,
    FlexLayoutModule,

    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),


  
  
    //UserModule
//  HttpClientInMemoryWebApiModule.forRoot(InMemoryContactsApi,{ delay: 200 }),

 

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
