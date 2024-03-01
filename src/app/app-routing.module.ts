import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'planets', loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule) },
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
  { path: 'starships', loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule) },
  { path: 'films', loadChildren: () => import('./films/films.module').then(m => m.FilmsModule) },
  { path : '', pathMatch : 'full', redirectTo: 'planets'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
