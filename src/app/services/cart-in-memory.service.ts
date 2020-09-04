import { Injectable } from '@angular/core';
import { ICart } from '../interfaces/ICart';

@Injectable({
  providedIn: 'root'
})
export class CartInMemoryService {

  createDb() { 
  const cart: ICart[] = [
    
  ];

  return {cart};
}
  genId(cart: ICart[]): number {
    return cart.length > 0 ? Math.max(...cart.map(news => news.id)) + 1 : 1;
  }
}
