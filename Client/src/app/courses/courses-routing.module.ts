import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { AuthGuard } from '../shared-services/auth.guard';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  { path: '', component: CoursesComponent, canActivate: [AuthGuard], },
  { path: 'add', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: 'edit', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
