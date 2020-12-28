import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  numbers = [1,2,3,4,5,6,7,8,9,10];


  constructor(private route:ActivatedRoute, private router:Router) { }

  snap(numb:any){
    this.router.navigate(['./box1',numb] , { relativeTo:this.route})
  }
  ngOnInit(): void {
  }

}
