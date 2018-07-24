import {AfterViewInit, Component, Input} from '@angular/core';

import {MnFullpageOptions, MnFullpageService} from 'ngx-fullpage';

import * as Rellax from 'rellax';
import * as animateOnScroll from 'aos';
export const aos = animateOnScroll;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';


  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    // scrollingSpeed: 1000,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    scrollBar: true,
    menu: '.header',
    verticalCentered: false,
    navigation: true,

    // menu: '.menu',
    // css3: true,
    anchors: [
      'Home', 'Gist', 'Yeah', 'Flavors',
      'Meat', 'End'
    ]
  });

  constructor(public fullpage: MnFullpageService) {
    aos.init();
  }

  ngAfterViewInit() {
    let rellax = new Rellax('.rellax');
  }

}
