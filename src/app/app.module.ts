import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatIconModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatDividerModule, 
  MatTooltipModule, 
  MatStepperModule,
  MatGridListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { FooterComponent } from './footer/footer.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { BarCardComponent } from './bar-card/bar-card.component';
import { UserInfoCardComponent } from './user-info-card/user-info-card.component';

import { SentimentService } from './services/sentiment.service';
import { HttpService } from './services/extended-http.service';
import { HttpModule, Http, BrowserXhr, RequestOptions, XHRBackend } from '@angular/http';

export function httpServiceFactory(backend: XHRBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReportComponent,
    FooterComponent,
    ChartCardComponent,
    BarCardComponent,
    UserInfoCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatTooltipModule,
    MatStepperModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SentimentService,
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
