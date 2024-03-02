import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { CommonsModule } from '../commons/commons.module';


@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    CommonsModule
  ]
})
export class PlanetsModule { }
