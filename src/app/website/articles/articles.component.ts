import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {



  constructor(private metaService: Meta) { }

  ngOnInit(): void {
    this.updateMetaTags();
  }

  updateMetaTags(){
    this.metaService.updateTag({property:'og:image', content: "New Image"}, "property='og:image'")
    this.metaService.updateTag({property:'og:title', content: "New Title"}, "property='og:title'")
    this.metaService.updateTag({property:'og:description', content: "New Description"}, "property='og:description'")
  }

}
