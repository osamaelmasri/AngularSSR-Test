import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'website-root',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebsiteComponent implements OnInit {

  constructor(
  ){}

  ngOnInit(): void {}
   
}
