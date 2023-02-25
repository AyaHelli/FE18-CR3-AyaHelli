import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';

const routes: Routes = [
  {path:"",component:HomeComponent
},{
  path:"about-us",component:AboutUsComponent
},{
  path:"menu",component:MenuComponent
},{
  path:"cart",component:CartComponent
},{
  path:"menu/menu/:id",component:MenudetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
