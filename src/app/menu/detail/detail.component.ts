import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  data:any;
  constructor(private route:ActivatedRoute = new ActivatedRoute()) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.paramMap.get("number");
  }

}
