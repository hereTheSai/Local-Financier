import { Component, Input } from '@angular/core';
import { Financier } from './financier.modal';
import {FinanciersService} from './financiers.service';

@Component({
  selector: 'app-financiers',
  templateUrl: './financiers.component.html',
  styleUrls: ['./financiers.component.css'],
  providers: [FinanciersService]
})
export class FinanciersComponent {

  selectedFinancier : Financier;
  @Input() InputData:any;
  constructor(private financiersService: FinanciersService) { }

  ngOnInit() {
    this.InputData = '';
      this.financiersService.selectedFinancier.subscribe(
        (financier: Financier) => {
          this.selectedFinancier = financier;
        }
);
  }
  onAddPost(postData){
    this.InputData = postData;
  }

}
