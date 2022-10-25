import { Component, OnInit, Input} from '@angular/core';
//import {PalnsService} from '../../plans.service';
import {Plan} from '../../plan.modal';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})
export class PlanItemComponent implements OnInit {
  @Input() planItem : Plan;

  constructor() { }
  // onSelect() {
  //   //this.plansService.plans.emit(this.planItem);
  //  console.log('selected Plan');
  // }
  ngOnInit(): void {
  }

}
