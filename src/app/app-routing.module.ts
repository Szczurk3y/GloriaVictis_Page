import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { TeamComponent } from '../app/components/team/team.component';


const routes: Routes = [
   {
      path: 'schedule',
      component: HomeComponent
   },
   {
      path: 'news',
      component: HomeComponent
   },
   {
      path: 'results',
      component: HomeComponent
   }
];

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
