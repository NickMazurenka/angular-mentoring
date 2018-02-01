import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/add', component: AddCourseComponent },
  { path: 'courses/edit/:id', component: AddCourseComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', redirectTo: '/courses' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
