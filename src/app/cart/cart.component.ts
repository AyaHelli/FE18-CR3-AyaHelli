import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Imenu } from '../menuarray';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Array<Imenu>=[];
constructor(private cs:CartService){}

ngOnInit(): void {
  this.cart =this.cs.getCart();
}
myForm=new FormGroup({
  name: new FormControl(''),
  Adresse:new FormControl(''),
});


}
