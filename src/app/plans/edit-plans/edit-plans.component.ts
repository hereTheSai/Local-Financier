import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Plan } from '../plan.modal';
import { PlansService} from '../plans.service'

@Component({
  selector: 'app-edit-plans',
  templateUrl: './edit-plans.component.html',
  styleUrls: ['./edit-plans.component.css']
})
export class EditPlansComponent implements OnInit {

  constructor(private plansService: PlansService) { }

  ngOnInit(): void {
  }

  AddPlanItem(form : NgForm) {
    const value = form.value
    const newPlan = new Plan(value.planName, value.financier,value.minAmount,value.maxAmount,value.intrestRate,value.emi)
    this.plansService.AddPlan(newPlan);
   console.log(newPlan);

  }

}
