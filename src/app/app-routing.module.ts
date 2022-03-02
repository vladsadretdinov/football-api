import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsPageComponent } from './pages/competitions-page/competitions-page.component';
import { CompetitionCalendarPageComponent } from './pages/competition-calendar-page/competition-calendar-page.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionsPageComponent,
  },
  {
    path: 'competitions/:id',
    component: CompetitionCalendarPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
