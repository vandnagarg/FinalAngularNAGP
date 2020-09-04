import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'api/allProducts';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  allProducts:IProduct[] = [];
  constructor (private http: HttpClient) {
  }
  getProducs(){
    return this.http.get<IProduct[]>(this.url);
  }
  getProducByID(id)
  {
    return this.http.get<IProduct>(this.url+"/"+id);
 
  }
  
}
