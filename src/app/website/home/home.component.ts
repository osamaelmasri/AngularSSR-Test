import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  loaded = false;

  fakeArray = new Array(3);

  constructor(){
  }

  ngOnInit(): void {
   this.getCategories();
  }
 
  getCategories(){
  }

  
  
 
}
