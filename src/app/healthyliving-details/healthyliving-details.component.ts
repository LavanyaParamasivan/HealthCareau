import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IhealthyDetails } from '../healthy-living/healthyliving.model';

@Component({
  selector: 'app-healthyliving-details',
  templateUrl: './healthyliving-details.component.html',
  styleUrls: ['./healthyliving-details.component.css']
})
export class HealthylivingDetailsComponent {
  
  @ Input() healthDetails!:IhealthyDetails;
  @ Output() buy = new EventEmitter();
  getImageUrl(healthDetails:IhealthyDetails){
    if(!healthDetails) return ''
  return '/assets/Images/' + healthDetails.imagename;
  }
  buybuttonclick(healthDetails: IhealthyDetails){
    this.buy.emit();
  }
}
