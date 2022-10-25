import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DealersComponent } from './dealers/dealers.component';
import { FinanciersComponent } from './financiers/financiers.component';
import { HomeComponent } from './home/home.component';
import { FinanciersListComponent } from './financiers/financiers-list/financiers-list.component';
import { FinancierDetailComponent } from './financiers/financier-detail/financier-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlansComponent } from './plans/plans.component';
import { FinancierItemComponent } from './financiers/financiers-list/financier-item/financier-item.component';
import { EditPlansComponent } from './plans/edit-plans/edit-plans.component';
import { PlansListComponent } from './plans/plans-list/plans-list.component';
import { PlanItemComponent } from './plans/plans-list/plan-item/plan-item.component';
import { AppRoutingModule } from './app-routing.module';
import { FinancierSelectComponent } from './financiers/financier-select/financier-select.component';
import { FinancierEditComponent } from './financiers/financier-edit/financier-edit.component';
import { FinancierNewComponent } from './financiers/financier-new/financier-new.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { FilterPipe} from './financiers/financiers-list/financiers-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DealersComponent,
    FinanciersComponent,
    HomeComponent,
    FinanciersListComponent,
    FinancierDetailComponent,
    NavbarComponent,
    PlansComponent,
    FinancierItemComponent,
    EditPlansComponent,
    PlansListComponent,
    PlanItemComponent,
    FinancierSelectComponent,
    FinancierEditComponent,
    FinancierNewComponent,
    PagenotfoundComponent,
    SignupComponent,
    LoginDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
