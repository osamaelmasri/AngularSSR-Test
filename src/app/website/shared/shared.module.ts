import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';


var importArray = [
  CommonModule, NgbModule, CarouselModule,NgxSkeletonLoaderModule, FormsModule, NgbModalModule
];

@NgModule({
  declarations: [],
  imports: [
    importArray
  ],
  exports: [
    importArray
  ]
})
export class SharedModule { }
