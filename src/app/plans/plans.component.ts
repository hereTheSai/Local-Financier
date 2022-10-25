import { Component, OnInit } from '@angular/core';
import {PlansService} from './plans.service';
import { Plan} from './plan.modal';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  providers : [PlansService]
})
export class PlansComponent implements OnInit {
plans: Plan[];
constructor(private plansService: PlansService) { }

  ngOnInit(): void {
    this.plans = this.plansService.GetPlans();

  }

}
