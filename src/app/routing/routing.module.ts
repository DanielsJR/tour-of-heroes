import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },

  {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],

  declarations: [
    // There are no declarations. Declarations are the responsibility of the companion module.
  ],

  providers: [
    // If you have guard services, the Routing Module adds module providers. (There are none in this example.)
  ]
})
export class RoutingModule { }
