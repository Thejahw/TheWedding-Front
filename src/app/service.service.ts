import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'environments/environment';
import { Service } from './Models/Service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apibase;
  formData = Service;

  constructor(private httpClient: HttpClient) {
    this.apibase = environment.apibase;
   }

   private handleError(errorResponce: HttpErrorResponse){
    if(errorResponce.error instanceof ErrorEvent){
      console.error('client side error: ',errorResponce.error.message);
    }else{
      console.error('server side error: ',errorResponce);
    }
    
  }

  getServices():Observable<Service[]>{
    return this.httpClient.get<Service[]>(`${this.apibase}/api/service`); 
  }

  postPaymentDetail(formData:Service){
    return this.httpClient.post(this.apibase+'api/postservice',formData);
  }

  deleteService(id:number):Observable<String>{ 
   return this.httpClient.delete(this.apibase+'api/deleteservice?id='+id,{responseType: 'text'});
   // .pipe(catchError(this.handleError));
 
  }

 editService(service:Service):Observable<String>{
   return this.httpClient.put<String>(this.apibase+'api/putservice?id='+service.service_id,service);
 }
}
