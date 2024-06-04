import { Injectable } from '@angular/core';
import { IhealthyDetails } from './healthy-living/healthyliving.model';
import{HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private cart: BehaviorSubject<IhealthyDetails[]> = new BehaviorSubject<IhealthyDetails[]>([]);
 //cart: IhealthyDetails[] =[];
 public userall:boolean=false;
 public cartcount:any;
  constructor(private http:HttpClient) {
    this.http.get<IhealthyDetails[]>('https://healthcaredata.onrender.com/cartdata').subscribe({
      next: (cart) => this.cart.next(cart),
    });

   }
   getCart(): Observable<IhealthyDetails[]> {
    return this.cart.asObservable();
  }

  add(healthDetails: IhealthyDetails) {
    const newCart = [...this.cart.getValue(), healthDetails];
    this.cart.next(newCart);
    this.http.post('https://healthcaredata.onrender.com/cartdata', newCart).subscribe(() => {
      console.log('added ' + healthDetails.description + ' to cart!');
    });
  }
    remove(healthDetails: IhealthyDetails) {
      let newCart = this.cart.getValue().filter((i) => i !== healthDetails);
      this.cart.next(newCart);
      this.http.post('https://healthcaredata.onrender.com/cartdata', newCart).subscribe(() => {
        console.log('removed ' + healthDetails.description + ' from cart!');
      });
    }
    removeall(healthDetails: IhealthyDetails) {
      let newCart: IhealthyDetails[] = [];
      this.cart.next(newCart);
      this.http.post('https://healthcaredata.onrender.com/cartdata', newCart).subscribe(() => {
        console.log('removed ' + healthDetails.description + ' from cart!');
      });
    }
    
   
}
