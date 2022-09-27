import { animate, style, transition, trigger } from '@angular/animations';

export var anAnimation = [
    trigger('fade',[
      transition('void => *', [
        style({opacity:0}),
        animate(500)
      ])
    ])
  ];