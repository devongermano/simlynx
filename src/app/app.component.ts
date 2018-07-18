import {Component, Input} from '@angular/core';

import * as animateOnScroll from 'aos';
import {MnFullpageOptions, MnFullpageService} from 'ngx-fullpage';

export const aos = animateOnScroll;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,

    menu: '.menu',
    css3: true,
    anchors: [
      'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
      'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
    ]
  });

  constructor(public fullpage: MnFullpageService) {
    aos.init();
  }

}
