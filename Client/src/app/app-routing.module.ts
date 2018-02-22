import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared-services/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'courses', loadChildren: 'app/courses/courses.module#CoursesModule', canLoad: [AuthGuard] },
      { path: '404', component: PageNotFoundComponent },
      { path: '', redirectTo: '/courses', pathMatch: 'full' },
    ]
  },
  { path: 'login', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
