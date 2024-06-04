import { Component, OnInit, inject } from '@angular/core';
import { IhealthyDetails } from './healthyliving.model';
import { BookService } from '../book.service';
import {HealthylivingService} from './healthyliving.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-healthy-living',
  templateUrl: './healthy-living.component.html',
  styleUrls: ['./healthy-living.component.css']
})
export class HealthyLivingComponent implements OnInit {
healthDetailss: IhealthyDetails[]=[];
filter:string='';
cart: IhealthyDetails[] =[];

private booksvc :BookService = inject(BookService);
constructor(private bookSvc : BookService, private healthyliving : HealthylivingService, private router :Router, private route : ActivatedRoute){

}
ngOnInit(){

  this.healthyliving.getDetails().subscribe(prod=>{
    console.log(prod)
  this.healthDetailss= prod;

  });
this.route.params.subscribe((param)=>{
  this.filter= param['filter']?? '';
});
}
addToBook(healthDetails: IhealthyDetails){
// this.cart.push(healthDetails);
this.bookSvc.remove(healthDetails);
//  console.log(healthDetails.description  + '  has been booked')  
this.bookSvc.add(healthDetails);
this.router.navigate(['/cart']);
}

getFilteredHealth(){
  return this.filter===''
  ? this.healthDetailss
  : this.healthDetailss.filter((prod)=>prod.description === this.filter)
 
}
}