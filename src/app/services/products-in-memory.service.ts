import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { ICart } from '../interfaces/ICart';

@Injectable({
  providedIn: 'root'
})
export class ProductsInMemoryService {

  createDb() {
    const allProducts: IProduct[] = [
      {
        "id": 1,
        "name": "Moile",
        "price": 18882,
        "desc": "fdgf",
        "tags": "dfgfg",
        "category": "fgfg",
        "quan": 12,
        "returnable": true
      },
      {
        "id": 2,
        "name": "shoes",
        "price": 1244,
        "desc": "",
        "tags": "",
        "category": "sd",
        "quan": 1,
        "returnable": true
      }
    ];
    const cart: ICart[] = [
    
    ];
  
    return {allProducts,cart};
  }
  genId(allProducts: IProduct[]): number {
    return allProducts.length > 0 ? Math.max(...allProducts.map(news => news.id)) + 1 : 1;
  }
 
}
