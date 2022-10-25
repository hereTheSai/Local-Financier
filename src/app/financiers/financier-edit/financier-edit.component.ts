import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-financier-edit',
  templateUrl: './financier-edit.component.html',
  styleUrls: ['./financier-edit.component.css']
})
export class FinancierEditComponent implements OnInit {
 editMode : boolean = false;
 id :number;

  constructor(private router : Router , private route : ActivatedRoute) { }

  ngOnInit() {
    //retriving 'id' from param query through router
    this.route.params.subscribe((params : Params) => {
      this.id = +params['id'];
      this.editMode = params['id']!== null; // always undefined === null
      console.log(params['id']);
      console.log(this.editMode);
    })
  }

}
