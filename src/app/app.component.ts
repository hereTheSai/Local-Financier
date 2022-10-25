import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-financier';
  activeFeature = 'Financiers';
  navigateTo(feature : string) {
  this.activeFeature = feature;
  }
}
