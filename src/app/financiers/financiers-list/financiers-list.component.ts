import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SharedDataService } from 'src/app/shared/sharedData.service';
import { Financier } from '../financier.modal';
import {FinanciersService} from '../financiers.service';

@Component({
  selector: 'app-financiers-list',
  templateUrl: './financiers-list.component.html',
  styleUrls: ['./financiers-list.component.css']
})
export class FinanciersListComponent implements OnInit {
 financiers : Financier[];

 constructor(private financiersService: FinanciersService , private router: Router
   , private route : ActivatedRoute, private sharedDataService: SharedDataService) { }


   filteredStatus = '';
   @Output() postData = new EventEmitter();
  ngOnInit(): void {
    this.financiers = this.financiersService.getFinanciers();
  }
  addFinancier() {
    console.log('adding new financier');
    this.financiersService.addFinancier();
    //this.router.navigate(['new'],{relativeTo: this.route})
  }
  clickme(username: any) {
    this.postData.emit(username);
    console.log(username);
  }
  clickme1(username: any) {
    this.sharedDataService.postData.emit(username);
    console.log(username);
  }

}
