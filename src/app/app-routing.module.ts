import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/home/news/news.component';
import { ScheduleComponent } from './components/home/schedule/schedule.component';
import { ResultsComponent } from './components/home/results/results.component';
import { TeamComponent } from './components/team/team.component';
import { ShopComponent } from './components/shop/shop.component';


const routes: Routes = [];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class AppRoutingModule { }
