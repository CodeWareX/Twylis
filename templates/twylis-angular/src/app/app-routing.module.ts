import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {SamplePage1Component} from './sample-page1/sample-page1.component';
import {SamplePage2Component} from './sample-page2/sample-page2.component';
import {SamplePage3Component} from './sample-page3/sample-page3.component';
import {TestPageComponent} from './test-page/test-page.component';
import {TwFormComponent} from './tw-form/tw-form.component';
import {AuthGuard} from './auth.guard';
import {AccountComponent} from './account/account.component';
import {TwReportComponent} from './tw-report/tw-report.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: MaterialDashboardComponent, canActivate: [AuthGuard]},
  { path: 'sample-1', component: SamplePage1Component},
  { path: 'sample-2', component: SamplePage2Component},
  { path: 'sample-3', component: SamplePage3Component},
  { path: 'test', component: TestPageComponent},
  { path: 'form', component: TwFormComponent},
  { path: 'report', component: TwReportComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
