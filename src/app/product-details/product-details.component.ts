import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/IProduct';
import { CartService } from '../services/cart.service';
import { ICart } from '../interfaces/ICart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private prodService:ProductService,private cartSer:CartService) { }
  id:number;
  product:IProduct;
  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      this.id = p["id"];
      
    })
    this.prodService.getProducByID(this.id).subscribe(d=>{
        this.product = d;
       })
  }
  addToCart(id){
    
    var cart : ICart[];
    this.cartSer.getCart().subscribe(d=>{
      cart = d;
      var c:ICart;
    if(cart.find(c=>c.productId == this.product.id) != null)
    {
      c= {
        id:cart.find(c=>c.productId == this.product.id).id,
        prodname:cart.find(c=>c.productId == this.product.id).prodname,
        productId:this.product.id,
        quan:cart.find(c=>c.productId == this.product.id).quan++,
        price:this.product.price
      }
      this.cartSer.updateCart(c).subscribe(d=>{
        this.router.navigate(["cart"])
      })
    }
    else{
      c= {
        id:cart.length+1,
        prodname:this.product.name,
        productId:this.product.id,
        quan:1,
        price:this.product.price
      }
      this.cartSer.addToCart(c).subscribe(d=>{
        console.log(d)
        this.router.navigate(["cart"])
      })
    }
    
    })
    
  }
  
}
