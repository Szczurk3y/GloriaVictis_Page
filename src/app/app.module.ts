import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/home/nav/nav.component';
import { WelcomeAnimationComponent } from './components/home/welcome-animation/welcome-animation.component';
import { TeamComponent } from './components/team/team.component';
import { SocialMediaComponent } from './components/home/social-media/social-media.component';
import { NewsComponent } from './components/home/news/news.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      WelcomeAnimationComponent,
      TeamComponent,
      SocialMediaComponent,
      NewsComponent,
      ShopComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule
   ],
   providers: [
      NavComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
