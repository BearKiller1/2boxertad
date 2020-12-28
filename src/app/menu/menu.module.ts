import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { OutputComponent } from './output/output.component';

import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [HomeComponent, ShopComponent, AboutComponent, ContactComponent, DetailComponent, ErrorComponent, Box1Component, Box2Component, OutputComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HomeComponent, ShopComponent, AboutComponent, ContactComponent, DetailComponent, ErrorComponent, Box1Component, Box2Component, OutputComponent]
})
export class MenuModule { }
