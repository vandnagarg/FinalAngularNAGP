import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';
import { ICart } from '../interfaces/ICart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = 'api/cart';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  allProducts:IProduct[] = [];
  constructor (private http: HttpClient) {
  }
  
  addToCart(cart : ICart){
    return this.http.post<ICart>(this.url,cart, this.httpOptions)
  }
  updateCart(c:ICart){
    return this.http.put(this.url+"/"+c.id,c);
  }
  getCart(){
      return this.http.get<ICart[]>(this.url);
  }
  remocecart(id)
  {
    return this.http.delete<IProduct>(this.url+"/"+id);
 
  }
}
