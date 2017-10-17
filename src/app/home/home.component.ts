import { Component, Output, OnInit } from '@angular/core';
import { User } from '../login/User';
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  account : string;

  constructor(
    private aRoute:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {

    this.aRoute.params
    .subscribe(params => {
      this.account = params["account"];
    })
  }

}
