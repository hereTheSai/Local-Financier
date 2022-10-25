import {Plan} from './plan.modal'

export class PlansService {
     plans: Plan[] = [
         new Plan('Sri Rama Fnc', 'Sai' , 10000, 100000, 2,250),
         new Plan('Star', 'Kumar' , 60000, 900000, 1,400)
     ]

     constructor() {}

     GetPlans() {
         return this.plans;
     }
     AddPlan(plan : Plan) {
        this.plans.push(plan);
     }

}
