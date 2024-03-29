import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { GoogleChartsModule } from 'angular-google-charts';

import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { TwFormComponent } from './tw-form/tw-form.component';
import { TwReportComponent } from './tw-report/tw-report.component';
import { SamplePage1Component } from './sample-page1/sample-page1.component';
import { SamplePage2Component } from './sample-page2/sample-page2.component';
import { SamplePage3Component } from './sample-page3/sample-page3.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AuthService } from './auth.service';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { AccountComponent } from './account/account.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

// import { appRoutes } from './routes';


    
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    ErrorPageComponent,
    MaterialDashboardComponent,
    TwFormComponent,
    TwReportComponent,
    SamplePage1Component,
    SamplePage2Component,
    SamplePage3Component,
    TestPageComponent,
    AccountComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        GoogleChartsModule,
        ReactiveFormsModule,
        PDFExportModule,
        // ToastrModule.forRoot(),
        // RouterModule.forRoot(appRoutes),
    ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
