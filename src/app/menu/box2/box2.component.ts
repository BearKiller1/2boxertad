import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit, OnDestroy {
  data:any;
  sub:any;
  constructor(private route:ActivatedRoute = new ActivatedRoute()) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe( params=>{
      this.data = params.get("number");
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
