import { Component, AfterContentInit, ViewChild } from '@angular/core';

declare var google;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterContentInit {
  map;
  @ViewChild('mapElement', {static: true}) mapElement;
  constructor() {}

  ngAfterContentInit() {
    try {
      this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: {lat: 21.170240, lng: 72.831062},
        zoom: 12
      }
    )
    } catch (error) {
      console.log('map error: ', error);
      
    }
    
  }

}
