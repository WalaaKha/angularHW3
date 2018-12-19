import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {DepartmentDescriptionComponent} from './department-description/department-description.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactUsComponent},
  {path: 'departments/:id', component:DepartmentDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentDescriptionComponent];
