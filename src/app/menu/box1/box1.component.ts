import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component implements OnInit {
  data:any;
  constructor(private route:ActivatedRoute = new ActivatedRoute()) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.paramMap.get('number');
  }

}
