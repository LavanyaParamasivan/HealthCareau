import { Component, OnInit } from '@angular/core';
import { IhealthyDetails } from '../healthy-living/healthyliving.model';
import {BookService} from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IGuestCredentials } from '../user/user.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

  export class CartComponent implements OnInit {
     private closeresult :any;
    private cart: IhealthyDetails[] = [];
    public userlog:boolean=false;
    public show:boolean=false;
    credentials: IGuestCredentials ={
      email:'',
      name:'',
      password:''
    }
    constructor(private bookService: BookService, private router:Router) { }
  
    ngOnInit() {

      this.userlog= this.bookService.userall;
      this.bookService.getCart().subscribe({
        next: (cart:any) => (this.cart = cart),
        
      });
      this.bookService.cartcount = this.cart.length;
    }
  
    get cartItems() {
      console.log('hi',this.cart)

      return this.cart;
    }
    openpopup(){
      this.show =true;
    }
    get cartTotal() {
      return this.cart.reduce((prev, next) => {
        let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
        return prev + next.cost * discount;
      }, 0);
    }
  
    removeFromCart(product: IhealthyDetails) {
      this.bookService.remove(product);
    }
  
    getImageUrl(product: IhealthyDetails) {
      if (!product) return '';
      return '/assets/Images/' + product.imagename;
    }
    checkout(cartItems:any){
      localStorage.setItem('cart_total',this.cartTotal.toString());
      this.bookService.removeall(cartItems);
      this.router.navigate(['/payment']);
 
    }
    cancel(){
      this.show =false; 
    }
    signinrout(){
   
        this.router.navigate(['users/sign-in']);
      
    }
    Signin(cartItems:any){

      localStorage.setItem('guest',this.credentials.email);
      this.bookService.userall =true;
      localStorage.setItem('cart_total',this.cartTotal.toString());
      this.bookService.removeall(cartItems);
      this.router.navigate(['/payment']);
    //   this.signInError=false;
    //   this.contactservice.getAllContacts().subscribe((contacts) =>{
    //   if(contacts){
    //     this.contacts = contacts;
    //     console.log(this.contacts)
    //     this.contacts.map((val)=>{
          
       
    //      if(val.email === this.credentials.email)
    //      {
    //       this.toastr.success('Signed-in Successfully', 'Success');
    //       this.signInError= false;
    //       this.contactservice.isUser.next(false);
    //       this.bookservice.userall =true;
    //       //  this.contactservice.userall=true;
    //       //  localStorage.setItem('key', 'true');
    //        localStorage.setItem('name',val.email);
          
    //         this.router.navigate(['/home']);
    //      }
    //      else{
    //        this.signInError= true;
    //        this.bookservice.userall =false;
    //       //  this.contactservice.userall=false;
    //       // this.dialog.open(MessageComponent,{ data: {
    //       //   message:  "Sign-in Unsuccessfull"
    //       //   }});
    //       this.contactservice.isUser.next(false)
        
    //       // localStorage.setItem('key', 'false');
    //      }
    //     });
    //   }}
    // );
  
  
    }
   
  }

