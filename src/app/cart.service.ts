import { Injectable } from '@angular/core';
import { Imenu } from './menuarray';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cart:Array<Imenu>=[]

  constructor() { }
  addTocart(obj:Imenu){
    this.cart.push(obj);
  }
  getCart(){
    return this.cart
  }
  
}
