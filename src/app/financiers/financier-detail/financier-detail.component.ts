import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute ,Params , Router} from '@angular/router';
import { SharedDataService } from 'src/app/shared/sharedData.service';
import { Financier } from '../financier.modal';
import {FinanciersService} from '../financiers.service';

@Component({
  selector: 'app-financier-detail',
  templateUrl: './financier-detail.component.html',
  styleUrls: ['./financier-detail.component.css']
})
export class FinancierDetailComponent implements OnInit {
 financier : Financier;
 id : number;
 inputData : any;
  constructor(private  financiersService : FinanciersService , private route : ActivatedRoute ,
               private router : Router, private sharedDataService : SharedDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) => {
          this.id = +params['id']; // getting with the index value later need to change here
          this.financier = this.financiersService.getFinancier(this.id);
          this.inputData = 'No Data';
          this.sharedDataService.postData.subscribe(data => {
            this.inputData = data;
          })

    })

  }
  editFinancier(){
    console.log("editFinancier");
    this.router.navigate(['edit'] , {relativeTo : this.route})
    console.log(this.id);
  }
  deleteFinancier(){
    console.log("deleteFinancier");
  }

}
