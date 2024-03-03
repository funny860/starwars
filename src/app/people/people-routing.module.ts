import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '',
    children : [
      { path: '', component: PeopleComponent},
      { path: 'details', component: DetailsComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
