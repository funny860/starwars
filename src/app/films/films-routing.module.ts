import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: FilmsComponent},
      { path: 'details', component:DetailsComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
