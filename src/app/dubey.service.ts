import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DubeyService {

  API_URL  =  'https://jsonplaceholder.typicode.com';
  constructor(private  httpClient:  HttpClient) {}
  getPosts(){
      return  this.httpClient.get(`${this.API_URL}/posts`);
}
}