import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LectureComponent } from './lecture/lecture.component';
import { StatsComponent } from './stats/stats.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'assignments', component: AssignmentComponent },
  { path: 'lectures', component: LectureComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
