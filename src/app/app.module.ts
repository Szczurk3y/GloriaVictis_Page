import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';

import { ScheduleComponent } from './components/home/schedule/schedule.component';
import { ResultsComponent } from './components/home/results/results.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/home/nav/nav.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/home/news/news.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeMiddleButtonsComponent } from './components/home/home-middle-buttons/home-middle-buttons.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      TeamComponent,
      NewsComponent,
      ShopComponent,
      ResultsComponent,
      ContactComponent,
      ScheduleComponent,
      HomeMiddleButtonsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatIconModule,
   ],
   providers: [
      NavComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
