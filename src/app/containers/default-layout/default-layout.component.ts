import { Component, ViewEncapsulation } from '@angular/core';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
styleUrls: ['./default-layout.component.scss'],
encapsulation: ViewEncapsulation.None
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}

  


}
