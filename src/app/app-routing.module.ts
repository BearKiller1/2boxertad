import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './menu/home/home.component';
import { ShopComponent } from './menu/shop/shop.component';
import { AboutComponent } from './menu/about/about.component';
import { ContactComponent } from './menu/contact/contact.component';
import { DetailComponent } from './menu/detail/detail.component';
import { ErrorComponent } from './menu/error/error.component';
import { Box1Component } from './menu/box1/box1.component';
import { Box2Component } from './menu/box2/box2.component';
import { OutputComponent } from './menu/output/output.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"shop",
    component:ShopComponent,
    children:[
      {
        path:"detail/:number",
        component:DetailComponent,
      },
      {
        path:"box1/:number",
        component:Box1Component,
      },
      {
        path:"box2/:number",
        component:Box2Component,
      }
    ]
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"home",
    component:HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
