import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared-services/auth.guard';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard], },
  { path: 'courses/add', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: 'courses/edit/:id', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: 'courses/edit', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
