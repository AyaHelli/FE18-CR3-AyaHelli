import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import{menus,Imenu} from '../menuarray';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
item:Array<Imenu> =menus
menus:any;

constructor(private route :ActivatedRoute,private cs:CartService){

}
addtoCart(obj:any){
  alert("added");
  this.cs.addTocart(obj)
}
ngOnInit(): void {
  this.route.params.subscribe((params)=>{
  let id: any =params["id"];
  this.menus =menus[id]
  });
}
}

