import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
    {
        path: 'news',
        component: NewsComponent,
    },
    {
        path: 'schedule',
        component: ScheduleComponent
    },
    {
        path: 'results',
        component: ResultsComponent
    },
    {
      path: '**', 
      component: NewsComponent
    }
];

@NgModule({
  declarations: [],
  exports: [
      RouterModule
   ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
