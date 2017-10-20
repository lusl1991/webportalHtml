import { Component, Output, OnInit } from '@angular/core';
import { Directive, Pipe, Injectable } from '@angular/core';
import { User } from '../login/User';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { EchartUtils } from '../../utils/EchartUtils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  account : string;
  echartsData : any;

  constructor(
    private aRoute:ActivatedRoute,
    private router:Router,
    private echarts:EchartUtils
  ) {}

  ngOnInit() {

    this.aRoute.params
    .subscribe(params => {
      this.account = params["account"];
    })

    this.echartsData = this.echarts.InitData();
  }

}
