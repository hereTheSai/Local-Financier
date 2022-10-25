import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.modal';
import { PlansService} from '../plans.service'

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.css']
})
export class PlansListComponent implements OnInit {
plans: Plan[];
  constructor(private plansService : PlansService) { }

  ngOnInit(): void{
    this.plans = this.plansService.GetPlans();
    console.log(this.plans);
  }

}
