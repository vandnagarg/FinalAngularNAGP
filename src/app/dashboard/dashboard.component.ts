import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private product: ProductService,private router:Router) { }
  products:IProduct[]=[];
  ngOnInit(): void {
    this.product.getProducs().subscribe(data=>{
      this.products = data;
    })
  }

  viewProduct(id){
    this.router.navigate(["/product",id]);
  }
 
}
