import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { GoogleChartComponent } from './cmps/google-chart/google-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { UserMsgComponent } from './cmps/user-msg/user-msg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    HomePageComponent,
    ContactFilterComponent,
    ContactEditComponent,
    StatisticPageComponent,
    GoogleChartComponent,
    SignupPageComponent,
    TransferFundComponent,
    MovesListComponent,
    UserMsgComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
