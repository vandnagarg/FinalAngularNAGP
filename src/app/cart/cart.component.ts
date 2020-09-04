import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICart } from '../interfaces/ICart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartSer:CartService) { }
  cart:ICart[]=[];
  ngOnInit(): void {
    this.cartSer.getCart().subscribe(d=>{
      this.cart = d;
    })
  }
  minus(id){
    var c : ICart = this.cart.find(x=>x.id == id);
    c.quan--;
    c.price = c.price*c.quan;
    this.cartSer.updateCart(c);
  }
  plus(id){
    var c : ICart = this.cart.find(x=>x.id == id);
    c.quan++;
    c.price = c.price*c.quan;

    this.cartSer.updateCart(c);
  }
  remove(id){
    this.cartSer.remocecart(id).subscribe(data=>{
      this.cart = this.cart.filter(x=>x.id != id);
    })
  }
}
