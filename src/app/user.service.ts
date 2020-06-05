import { Injectable } from '@angular/core';
import { User } from './Models/User';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apibase:string;
  k={
    "username":"shynPhoto",
  };

  constructor(private httpClient:HttpClient) { 
    this.apibase=environment.apibase;
  }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apibase}/api/user`); 
  }

  changeStatus(username, state, attribute):Observable<string>{
    return this.httpClient.post(`${this.apibase}api/postuserenable`,{username,state,attribute},{responseType: 'text'}); 
  }
}
