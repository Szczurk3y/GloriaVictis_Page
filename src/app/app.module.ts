import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/home/nav/nav.component';
import { ClockComponent } from './components/home/clock/clock.component';
import { NewsComponent } from './components/home/news/news.component';
import { CounterComponent } from './components/home/counter/counter.component';
import { WelcomeAnimationComponent } from './components/home/welcome-animation/welcome-animation.component';

import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './components/team/team.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      ClockComponent,
      NewsComponent,
      CounterComponent,
      WelcomeAnimationComponent,
      TeamComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
      NavComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
