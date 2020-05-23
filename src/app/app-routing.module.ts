import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDogsComponent } from './display-dogs/display-dogs.component'


const routes: Routes = [
  { path: '', redirectTo: 'dogs', pathMatch: 'full'},
  { path: 'dogs', component:DisplayDogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
