import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Financier} from '../../financier.modal';
import {FinanciersService} from '../../financiers.service';

@Component({
  selector: 'app-financier-item',
  templateUrl: './financier-item.component.html',
  styleUrls: ['./financier-item.component.css']
})
export class FinancierItemComponent implements OnInit {
  @Input() financier : Financier; //Enhance this code
  @Input() index : number;//Enhance this code

  constructor() { }

  // onSelect() {
  //   console.log(this.financier.name);
  //   this.financiersService.selectedFinancier.emit(this.financier);
  // }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.financier = this.financiersService.getFinancierWithId(params['id']);
    // });
  }

}
