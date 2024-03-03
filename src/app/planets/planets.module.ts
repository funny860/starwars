import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { CommonsModule } from '../commons/commons.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    PlanetsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    CommonsModule
  ]
})
export class PlanetsModule { }
