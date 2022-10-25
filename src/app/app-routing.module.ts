import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinancierDetailComponent } from "./financiers/financier-detail/financier-detail.component";
import { FinancierEditComponent } from "./financiers/financier-edit/financier-edit.component";
import { FinancierSelectComponent } from "./financiers/financier-select/financier-select.component";
import { FinanciersComponent } from "./financiers/financiers.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { PlansComponent } from "./plans/plans.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginDetailsComponent } from "./login-details/login-details.component";


const appRoutes : Routes = [
    {path : 'login', component : LoginDetailsComponent},
    {path:'signup', component: SignupComponent},
    {path:'',redirectTo: '/login',pathMatch: 'full'}, // redirect to signup page
    {path:'financiers',component:FinanciersComponent ,
     children :[
         {path:'', component:FinancierSelectComponent},
         {path:'new', component:FinancierEditComponent},
         {path:':id', component:FinancierDetailComponent},
         {path:':id/edit', component:FinancierEditComponent},
    ]},
    {path:'plans',component : PlansComponent},
    {path:'home' , component: HomeComponent},
    {path: '**' , component:PagenotfoundComponent} // for wildcard routes
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], // queryParams , Fragments
    exports: [RouterModule]
})

export class AppRoutingModule {
}