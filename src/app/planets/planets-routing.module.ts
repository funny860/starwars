import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { 
    path: '', 
    children : [
      {
        path : 'details',
        component: DetailsComponent,
      },
      {
        path : '',
        component : PlanetsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
