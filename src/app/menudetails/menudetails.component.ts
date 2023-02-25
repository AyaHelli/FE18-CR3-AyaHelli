import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import {menus,Imenu} from '../menuarray'

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent implements OnInit {
item:Imenu={} as Imenu;
id:number=0;
constructor(private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{
this.id=+params['id'];
this.item =menus [this.id]
  });
}
}
