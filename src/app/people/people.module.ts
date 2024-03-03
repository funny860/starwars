import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { DetailsComponent } from './details/details.component';
import { CommonsModule } from '../commons/commons.module';


@NgModule({
  declarations: [
    PeopleComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CommonsModule
  ]
})
export class PeopleModule { }
