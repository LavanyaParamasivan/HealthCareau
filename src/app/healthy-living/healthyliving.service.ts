import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IhealthyDetails } from './healthyliving.model';
import { Observable, catchError, pipe, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthylivingService {

  constructor( private http: HttpClient) { }

  getDetails():Observable<IhealthyDetails[]>{
    return this.http.get<IhealthyDetails[]>('https://healthcaredata.onrender.com/healthDetailss');
  
  }
}
