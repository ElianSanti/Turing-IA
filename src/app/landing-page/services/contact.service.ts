import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _baseUrl:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  sendForm(name:string, email:string, telNumber:string, company:string, msg:string){
    const body = {name, email, telNumber, company, msg};
    return this.http.post(this._baseUrl, body)
  }
}
